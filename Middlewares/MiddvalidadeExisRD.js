module.exports = (request, response, next) => {
  const { talk: { watchedAt, rate } } = request.body;

  if (!watchedAt || !rate) {
    return response.status(400).json({
       message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
     }); 
   }
 next();
};