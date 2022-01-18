const fs = require('fs');

module.exports = async (request, response) => {
  const { name, age, talk: { watchedAt, rate } } = request.body;

  if (!watchedAt || !rate) {
 return response.status(400).json({
    message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  }); 
}
  
  const talkersPromises = await fs.promises.readFile('./talker.json', 'utf-8');
  const talker = JSON.parse(talkersPromises);

  const index = talker.length - 1;
  
  talker.push({ id: talker[index].id + 1, name, age, talk: { watchedAt, rate } });

  await fs.promises.writeFile('./talker.json', JSON.stringify(talker));
  return response.status(201)
  .json({ id: talker[index].id + 1, name, age, talk: { watchedAt, rate } });
};