import express, { Application } from 'express';
import bodyParser from 'body-parser';
import PersonProvider from '../providers/person/PersonProviderType';
import PersonService from '../services/PersonServiceType';

class App {
  static makeApp: (personService: PersonService, personProvider: PersonProvider) => Application;
}

App.makeApp = (personService: PersonService, personProvider: PersonProvider) => {
  const app: Application = express();
  // bodyParser allows us to parse a JSON encoded body
  const jsonParser = bodyParser.json();

  app.get('/', (req, res) => {
    res.status(200);
    res.send('Server is running');
  });

  app.put('/person', jsonParser, async (req, res) => {
    const response = await personService.createPerson(personProvider, req.body);
    res.status(response ? 200 : 500);
    res.end();
  });

  app.get('/person/:id', async (req, res) => {
    const response = await personService.getPerson(personProvider, req.params.id);
    if (response) {
      res.status(200);
      res.send(response);
    } else {
      res.status(500);
      res.end();
    }
  });

  app.get('/people', async (req, res) => {
    const response = await personService.getAllPeople(personProvider);
    if (response) {
      res.status(200);
      res.send(response);
    } else {
      res.status(500);
      res.end();
    }
  });

  app.patch('/person/:id', jsonParser, async (req, res) => {
    const response = await personService.updatePerson(personProvider, req.params.id, req.body);
    res.status(response ? 200 : 500);
    res.end();
  });

  app.delete('/person/:id', jsonParser, async (req, res) => {
    const response = await personService.deletePerson(personProvider, req.params.id);
    res.status(response ? 200 : 500);
    res.end();
  });

  return app;
};

export default App;
