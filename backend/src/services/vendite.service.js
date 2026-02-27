const pool = require('../config/db');
const repo = require('../repositories/vendite.repository');

const createVendita = async (data) => {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    let totale = 0;

    for (const item of data.articoli) {

      const articolo = await repo.getArticoloById(
        client,
        item.id_articolo
      );

      if (!articolo)
        throw new Error('Articolo non trovato');

      if (articolo.quantita_magazzino < item.quantita)
        throw new Error('Quantità insufficiente');

      totale += articolo.prezzo * item.quantita;

      await repo.updateMagazzino(
        client,
        item.id_articolo,
        item.quantita
      );
    }

    const vendita = await repo.insertVendita(
      client,
      data.id_cliente,
      totale
    );

    await client.query('COMMIT');
    return vendita;

  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
};

module.exports = {
  createVendita
};