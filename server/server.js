const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const adminRouter = require("./auth/users-router");
const appointRouter = require("./appointments/appointments-router");
const deletedRouter = require("./appointments/deleted-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/users", adminRouter);
server.use("/api/appointments", appointRouter);
server.use("/api/deletedAppointments", deletedRouter);

server.get("/", async (req, res) => {
  res.send("Welcome to LoveByLayshas server");
});

module.exports = server;
