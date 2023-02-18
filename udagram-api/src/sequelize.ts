import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize
("postgres://postgres:nourax123@database-1.c8icj2f1wqda.us-east-1.rds.amazonaws.com:5432/postgres");
