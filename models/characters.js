const fs = require('fs');

const getAll = async () => {
  const talkers = await fs.promises.readFile('./talker.json', 'utf8');

  const objectTalker = JSON.parse(talkers);

  return objectTalker;
};

 const newTalker = async ({ name, age, talk: { watchedAt, rate } }) => {
  try {
    const talker = await getAll();
    const index = talker.length - 1;
    const newTalkerR = { id: talker[index].id + 1, name, age, talk: { watchedAt, rate } };
    talker.push(newTalkerR);
    
    await fs.promises.writeFile('./talker.json', JSON.stringify(talker));

    return newTalkerR;
  } catch (err) {
    console.error(err);
  }
 };

module.exports = {
  getAll,
  newTalker,
};