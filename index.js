const express = require('express');
const bodyParser = require('body-parser');
const talkerMidd = require('./Middlewares/talkerMidd');
const searchMidd = require('./Middlewares/searchMidd');
const loginMidd = require('./Middlewares/loginMidd');
const MiddvalidatesToken = require('./Middlewares/MiddvalidatesToken');
const MiddValidateUser = require('./Middlewares/MiddValidateUser');
const MiddValidateAge = require('./Middlewares/MiddValidateAge');
const MiddValidateDate = require('./Middlewares/MiddValidateDate');
const MiddValidateRate = require('./Middlewares/MiddValidateRate');
const MiddRegisterUser = require('./Middlewares/MiddRegisterUser');
const MiddEdit = require('./Middlewares/MiddEdit');
const MiddDeletUser = require('./Middlewares/MiddDeletUser');
const MiddQuerySearch = require('./Middlewares/MiddQuerySearch');
const MiddvalidadeExisRD = require('./Middlewares/MiddvalidadeExisRD');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker/search', MiddvalidatesToken, MiddQuerySearch);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talkerMidd);

app.get('/talker/:id', searchMidd);

app.post('/login', loginMidd);

app.post('/talker', 
MiddvalidatesToken, 
MiddValidateUser,
MiddValidateAge,
MiddValidateDate,
MiddValidateRate,
MiddvalidadeExisRD,
MiddRegisterUser);

app.put('/talker/:id',
MiddvalidatesToken,
MiddValidateUser,
MiddValidateAge,
MiddValidateDate,
MiddValidateRate,
MiddEdit);

app.delete('/talker/:id',
 MiddvalidatesToken,
 MiddDeletUser);

app.listen(PORT, () => {
  console.log('Online');
});
