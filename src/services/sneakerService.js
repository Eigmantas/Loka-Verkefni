const db = require('../lib/db');

const getALLSneakers = async () => {
    const result = await db.query('SELECT * FROM sneakers ORDER BY id ASC');
    return result.rows;
};

const getSneakerById = async (id) => {
    const result = await db.query('SELECT * FROM sneakers WHERE id = $1', [id]);

    if(result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
};


module.exports = {
    getALLSneakers,
    getSneakerById
};