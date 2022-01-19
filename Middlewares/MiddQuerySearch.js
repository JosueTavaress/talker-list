const fs = require('fs');

module.exports = async (request, response) => {
  const { q } = request.query;
  
  const talkerList = await fs.promises.readFile('./talker.json', 'utf-8');

  const filterTalker = await JSON.parse(talkerList)
  .filter((el) => el.name.toLowerCase().includes(q.toLowerCase()));
  
  return response.status(200).send(filterTalker);
};