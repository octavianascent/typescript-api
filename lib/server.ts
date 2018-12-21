import {createServer} from 'http';
import app from "./app";
import {sequelize} from './utils/dbConfig';

const PORT = 5000;

(async () => {
  await sequelize.sync({force: true});
  createServer(app)
    .listen(PORT, () => {
      console.log(`Running on port ${PORT}`)
    });
})();