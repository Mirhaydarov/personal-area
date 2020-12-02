/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs-extra');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');
const jwt = require('jsonwebtoken');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const accountsDb = fs.readJsonSync('./accounts.json');
const middleware = jsonServer.defaults();

server.use(middleware);
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

const SECRET_KEY = '123456789';
const expiresIn = '1h';

function createToken(payload){
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

function verifyToken(token){
  return  jwt.verify(token, SECRET_KEY, (err, decode) => decode !== undefined ?  decode : err);
}

function isAuthenticated({ email, password }){
  return accountsDb.users.findIndex(user => user.email === email && user.password === password) !== -1;
}

server.put('/add-contact', (req, res) => {
  fs.readJson("./db.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    const lastItemId = data.contacts[data.contacts.length - 1].id;

    data.contacts.push({ id: lastItemId + 1, ...req.body });
    fs.writeJson("./db.json", data, { spaces: 2 }, (error) => {
      if (error) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
      }
    });
  });

  const status = 200;
  const message = 'Contact was created'
  res.status(status).json({ status, message });
})

server.put('/edit-contact/:id', (req, res) => {
  const { id } = req.params;

  fs.readJson("./db.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    const idx = data.contacts.findIndex(contact => contact.id === +id);
    const newBody = req.body;

    data.contacts = [
      ...data.contacts.slice(0, idx),
      { id: +id, ...newBody },
      ...data.contacts.slice(idx + 1)
    ];

    fs.writeJson("./db.json", data, { spaces: 2 }, (error) => {
      if (error) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
      }
    });
  });

  const status = 200;
  const message = 'Contact was edited'
  res.status(status).json({ status, message });
})

server.delete('/delete-contact/:id', ({ params }, res) => {
  const { id } = params;

  fs.readJson("./db.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    
    const idx = data.contacts.findIndex(contact => contact.id === +id);
    data.contacts = [
      ...data.contacts.slice(0, idx),
      ...data.contacts.slice(idx + 1)
    ];

    fs.writeJson("./db.json", data, { spaces: 2 }, (error) => {
      if (error) {
        const status = 401;
        const message = err;
        res.status(status).json({ status, message });
      }
    });
  });

  const status = 200;
  const message = 'Contact was deleted'
  res.status(status).json({ status, message });
})

server.post('/auth/register', (req, res) => {
  const { email, password } = req.body;

  if (!isAuthenticated({ email, password })) {
    const status = 401;
    const message = 'Incorrect email or password';
    res.status(status).json({ status, message });
    return;
  }
  const status = 200;
  const access_token = createToken({ email, password });
  res.status(status).json({ access_token });
});

server.use(/^(?!\/auth).*$/,  (req, res, next) => {
  if (
    req.headers.authorization === undefined 
    || req.headers.authorization.split(' ')[0] !== 'Bearer'
    || req.headers.authorization.split(' ')[1] === undefined
  ) {
    const status = 401;
    const message = 'Bad authorization header';
    res.status(status).json({ status, message });
    return;
  }
  try {
    verifyToken(req.headers.authorization.split(' ')[1]);
    next();
  } catch (err) {
    const status = 401;
    const message = 'Error: access_token is not valid';
    res.status(status).json({ status, message });
  }
});

server.use(router);
server.listen(8080, () => {
  console.log('JSON Server is running, see http://localhost:8080');
});