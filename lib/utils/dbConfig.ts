import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  username: "root",
  password: "admin123",
  database: "spendings",
  dialect: "mysql",
  modelPaths: [__dirname + '../models']
});