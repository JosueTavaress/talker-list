const character = require('../models/characters');

module.exports = async (request, response) => {
  const { name, age, talk: { watchedAt, rate } } = request.body;

  const newtalker = await character.newTalker({ name, age, talk: { watchedAt, rate } });

  return response.status(201)
  .json(newtalker);
};