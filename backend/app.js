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

const programRoutes = require('./routes/programRoutes.js');
app.use('/api/programs', programRoutes);

const courseRoutes = require('./routes/courseRoutes.js');
app.use('/api/courses', courseRoutes);

const degreeRoutes = require('./routes/degreeRoutes.js');
app.use('/api/degrees', degreeRoutes);

const myModelRoutes = require('./routes/myModelRoutes.js');
app.use('/api/models', myModelRoutes);

const authRoutes = require('./routes/authRoutes.js');
app.use('/api/auth', authRoutes);

const userRoutes = require('./routes/userRoutes.js');
app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;