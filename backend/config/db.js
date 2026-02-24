const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://postgres:ezXFZR8puUV1QwQZ@db.kcmvfzocstwottoykwcj.supabase.co:5432/postgres'
})

pool.connect()
  .then(() => console.log('✅ Connesso al DB Postgres!'))
  .catch(err => console.log('❌ Errore di connessione:', err))
  .finally(() => pool.end())

module.exports = pool;