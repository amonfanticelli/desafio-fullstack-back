import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource =
  process.env.NODE_ENV === "test"
    ? new DataSource({
        type: "sqlite",
        database: ":memory:",
        entities: ["src/entities/*.ts"],
        synchronize: true,
      })
    : new DataSource({
        type: "postgres",
        host: process.env.HOST,
        port: process.env.PGPORT,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: true,
        entities: ["src/entities/*.ts"],
        migrations: ["src/migrations/*.ts"],
      });

export { AppDataSource };
