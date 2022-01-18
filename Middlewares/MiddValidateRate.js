module.exports = (request, response, next) => {
  const { talk: { rate } } = request.body;

  if (!rate) {
 return response.status(400).json({
    message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
  }); 
}

  if (typeof rate !== 'number' || rate < 1 || rate > 5) {
 return response.status(400).json({
    message: 'O campo "rate" deve ser um inteiro de 1 à 5',
  }); 
}

  next();
};