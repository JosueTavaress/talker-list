const characters = require('../models/characters');

module.exports = async (request, response) => {
  const { id } = request.params;

  const talkerList = await characters.getAll();

  const userFilter = talkerList.find((el) => el.id === Number(id));
  return userFilter ? response.status(200).send(userFilter)
  : response.status(404).send({ message: 'Pessoa palestrante não encontrada' });
};