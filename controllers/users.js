const path = require('path');

const getData = require('../helpers/files');

const dataPath = path.join(__dirname, '../data/users.json');

const getUsers = (req, res) => getData(dataPath)
  .then((users) => res.status(200).send(users))
  .catch((err) => res.status(500).send({ message: `Ошибка: ${err.message}` }));

const getUser = (req, res) => getData(dataPath)
  .then((users) => users.find((user) => user._id === req.params.id))
  .then((user) => {
    if (!user) {
      res.status(404).send({ message: 'Нет пользователя с таким id' });
    }
    res.status(200).send(user);
  })
  .catch((err) => res.status(500).send({ message: `Ошибка: ${err.message}` }));

module.exports = { getUsers, getUser };
