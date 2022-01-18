const fs = require('fs');

module.exports = async (request, response) => {
  const { id } = request.params;

  const talkersJson = await fs.promises.readFile('./talker.json', 'utf-8');

  const talkerArray = await JSON.parse(talkersJson);

  const newArrayTalkers = talkerArray.filter((el) => el.id !== Number(id));

  await fs.promises.writeFile('./talker.json', JSON.stringify(newArrayTalkers));

  return response.status(204).send('delete');
};