import * as bcrypt from 'bcryptjs';
import {
  Table, Column,
  Model, HasMany,
  BeforeCreate, AutoIncrement,
  PrimaryKey, CreatedAt, UpdatedAt, DeletedAt
} from 'sequelize-typescript';

@Table({
  tableName: 'users',
  timestamps: true
})
export default class User extends Model <User> {

  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;


  @Column
  email: string

  @Column
  password: string

  @CreatedAt
  creationDate: Date;

  @UpdatedAt
  updatedOn: Date;

  @DeletedAt
  deletionDate: Date;

  @BeforeCreate
  static hashPassword (instance: User) {
    instance.password = bcrypt.hashSync(instance.password, 12);
  }
};