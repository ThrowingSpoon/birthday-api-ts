import dotenv from 'dotenv';
import personRelationalDb from '../providers/person/PersonRelationalDb';
import personService from '../services/person/PersonService';
import App from './app';

dotenv.config();
const { PORT } = process.env;
const { HOST } = process.env;

const app = App.makeApp(personService, personRelationalDb);

// Start the server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port http://${HOST}:${PORT}`);
});
