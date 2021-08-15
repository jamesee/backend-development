const { Pool } = require('pg')

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})

const db = {
  ...require('./items')(pool)
}

db.initialise = async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS Items (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      quantity INTEGER NOT NULL
    )
  `)
}

db.end = async () => {
  await pool.end()
}

module.exports = db