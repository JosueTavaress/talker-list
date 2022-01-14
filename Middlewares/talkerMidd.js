const fs = require('fs');

module.exports = async (_request, response) => {
   const talker = await fs.promises.readFile('./talker.json', 'utf8');
   const talkers = JSON.parse(talker);
   const responseUser = talker.length > 0 ? response.status(200).send(talkers)
     : response.status(200).send([]);
     return responseUser;
};