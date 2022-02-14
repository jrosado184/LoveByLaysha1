const db = require("../data/db-config");

const findAll = () => {
  return db("appointments");
};

const insert = async (appointments) => {
  const [appoint_id] = await db("appointments").insert(appointments, [
    "appointment_date",
    "appointment_time",
    "client_name",
    "client_phone",
    "client_set",
    "client_refill",
    "client_refillSet",
    "client_Soak",
    "client_details",
  ]);
  return appoint_id;
};

module.exports = {
  findAll,
  insert,
};
