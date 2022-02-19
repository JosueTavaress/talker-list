const fs = require('fs');
const characters = require('../models/characters');

module.exports = async (request, response) => {
  const { name, age, talk: { watchedAt, rate } } = request.body;
  const { id } = request.params;
  const userId = Number(id);

  const talker = await characters.getAll();

  const Newtalkers = talker.filter((el) => el.id !== userId);
  const useExist = talker.find((el) => el.id === userId);
  if (!useExist) return response.status(400).send('não existe esse user');
  Newtalkers.push({ id: userId, name, age, talk: { watchedAt, rate } });

  await fs.promises.writeFile('./talker.json', JSON.stringify(Newtalkers));
  
  return response.status(200).json({ id: userId, name, age, talk: { watchedAt, rate } });
};