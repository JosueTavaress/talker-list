module.exports = (request, response, next) => {
  const { talk } = request.body;
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!talk) {
    return response.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  }
  const { talk: { watchedAt } } = request.body;
  if (!watchedAt) {
    return response.status(400).json({
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
    });
  } if (!regex.test(watchedAt)) {
    return response.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }
  next();
};