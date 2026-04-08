const db = require('../lib/db');

const getALLSneakers = async () => {
    const result = await db.query('SELECT * FROM sneakers ORDER BY id ASC');
    return result.rows;
};

module.exports = {
    getALLSneakers
};