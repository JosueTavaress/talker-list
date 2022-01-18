module.exports = (request, response, next) => {
  const { age } = request.body;

   if (!age) {
    return response.status(400).json({
    message: 'O campo "age" é obrigatório',
  }); 
}

  if (age < 18) {
 return response.status(400).json({
    message: 'A pessoa palestrante deve ser maior de idade',
  }); 
}
 
  next();
};