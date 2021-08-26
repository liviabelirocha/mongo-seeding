const express = require("express");

const seed = require("./services/seed");

const app = express();

app.use(express.json());

app.post("/seed", async (request, response) => {
  const res = await seed();
  if (res.err) return response.status(400).send({ message: "Ocorreu um erro" });
  return response.send(res);
});

app.listen(3333);
