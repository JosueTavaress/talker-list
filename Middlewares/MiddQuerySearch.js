const characters = require('../models/characters');

module.exports = async (request, response) => {
  const { q } = request.query;

  const talkerList = await characters.getAll();

  const filterTalker = talkerList
  .filter((el) => el.name.toLowerCase().includes(q.toLowerCase()));

  // await Promise.all(filterTalker);
  
  return response.status(200).send(filterTalker);
};