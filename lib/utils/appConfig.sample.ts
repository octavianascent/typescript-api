import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  username: "username",
  password: "password",
  database: "some_database",
  dialect: "mysql",
  modelPaths: [__dirname + '/../models']
});

export const tokenSecret = '9idaopkdoaijduiw84iqsdm,cnmdscn1i23434943242msdasds89' // <-- change this text