import {createServer} from 'http';
import app from "./app";
import {sequelize} from './utils/dbConfig';

const PORT = 5000;

(async () => {
  try {
    await sequelize.sync({force: true});
  } catch (e) {
    console.log(e);
  }

  app.listen(PORT, () => {
      console.log(`Running on port ${PORT}`)
    });
})();