import dotenv from 'dotenv';
import App from './app';

dotenv.config();
const { PORT } = process.env;
const { HOST } = process.env;

const app = App.makeApp();

// Start the server
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port http://${HOST}:${PORT}`);
});
