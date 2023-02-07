import request from "supertest";
import { app } from "../../../app";
import { DataSource } from "typeorm";
import { AppDataSource } from "../../../data-source";
import { mockedClient } from "../../mocks";
import { mockedContact } from "../../mocks";

describe("Testing client routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => {
        connection = res;
      })
      .catch((err) => {
        console.log(err);
      });
  });
  afterAll(async () => {
    await connection.destroy();
  });

  test("Should be able to create a new user", async () => {
    const resultClient = await request(app).post("/users").send(mockedClient);

    expect(resultClient.status).toBe(201);
    expect(resultClient.body).toHaveProperty("fullName");
    expect(resultClient.body).toHaveProperty("cellphone");
  });

  test("Should be able to list user", async () => {
    const clientLogin = await request(app).post("/session").send(mockedClient);
    const response = await request(app)
      .get("/user")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    expect(response.status).toBe(200);
  });
});
