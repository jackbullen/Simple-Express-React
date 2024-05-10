const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json()); 
app.use(cors());

// const postgresUser = process.env.POSTGRES_USER;
// const postgresDb = process.env.POSTGRES_DB;
// const postgresHost = process.env.POSTGRES_HOST;
// const postgresPort = process.env.POSTGRES_PORT;

// const pool = new Pool({
//   user: postgresUser,
//   host: postgresHost,
//   database: postgresDb,
//   port: postgresPort,
// });

const myModelRoutes = require('./routes/myModelRoutes.js').default;
app.use('/api/models', myModelRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;