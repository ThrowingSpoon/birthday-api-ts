import express, { Application } from 'express';

class App {
  static makeApp: () => Application;
}

App.makeApp = () => {
  const app: Application = express();

  app.get('/', (req, res) => {
    res.status(200);
    res.send('Server is running');
  });

  return app;
};

export default App;
