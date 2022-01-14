const fs = require('fs');

module.exports = async (request, response) => {
  const { id } = request.params;
  const talker = await fs.promises.readFile('./talker.json');
  const parseJson = JSON.parse(talker);
  const userFilter = parseJson.find((el) => el.id === Number(id));
  return userFilter ? response.status(200).send(userFilter)
  : response.status(404).send({ message: 'Pessoa palestrante não encontrada' });
};