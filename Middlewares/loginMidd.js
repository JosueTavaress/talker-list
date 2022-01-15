const crypto = require('crypto');

module.exports = (request, response) => {
  const { email, password } = request.body;
  const emailInva = { message: 'O "email" deve ter o formato "email@email.com"' };
  const PasswordInva = { message: 'O campo "password" é obrigatório' };
  const token = crypto.randomBytes(8).toString('hex');
  const regex = /\S+@\S+\.\S+/;
  const validationEmail = regex.test(email); 
  if (email === undefined) {
    return response.status(400).json({ message: 'O campo "email" é obrigatório' });
  } if (!validationEmail) {
    return response.status(400).json(emailInva); 
  }

  if (password === undefined) {
    return response.status(400).json(PasswordInva);
  } if (password.length < 6) {
    return response.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' }); 
  }
  return response.status(200).json({ token });
};