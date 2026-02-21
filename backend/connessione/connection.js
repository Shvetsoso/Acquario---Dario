const { Client } = require('pg')

const client = new Client({
  connectionString: 'postgresql://postgres:ezXFZR8puUV1QwQZ@db.kcmvfzocstwottoykwcj.supabase.co:5432/postgres'
})

client.connect()
  .then(() => console.log('✅ Connesso al DB Postgres!'))
  .catch(err => console.log('❌ Errore di connessione:', err))
  .finally(() => client.end())

  