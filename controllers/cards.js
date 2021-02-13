const path = require('path');
const getData = require('../helpers/files');

const dataPath = path.join(__dirname, '../data/cards.json');

const getCards = (req, res) => getData(dataPath)
  .then((cards) => res.status(200).send(cards))
  .catch((err) => res.status(500).send({ message: `Ошибка: ${err.message}` }));

module.exports = getCards;
