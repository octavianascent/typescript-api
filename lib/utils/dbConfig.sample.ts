import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  username: "username",
  password: "password",
  database: "some_database",
  dialect: "mysql",
  modelPaths: [__dirname + '/../models']
});