const characters = require('../models/characters');

module.exports = async (_request, response) => {   
   const talkerList = await characters.getAll();

   const responseUser = talkerList.length > 0 ? response.status(200).send(talkerList)
     : response.status(200).send([]);
     return responseUser;
};