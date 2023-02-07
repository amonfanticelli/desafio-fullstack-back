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
    await request(app).post("/users").send(mockedClient);
  });
  afterAll(async () => {
    await connection.destroy();
  });

  test("Should be able to create Contact", async () => {
    const clientLogin = await request(app).post("/session").send(mockedClient);

    const contactResponse = await request(app)
      .post("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`)
      .send(mockedContact);

    expect(contactResponse.status).toBe(201);
  });

  test("Should be able to list contacts", async () => {
    const clientLogin = await request(app).post("/session").send(mockedClient);
    const response = await request(app)
      .get("/contacts")
      .set("Authorization", `Bearer ${clientLogin.body.token}`);

    expect(response.status).toBe(200);
  });
});
