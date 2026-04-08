const sneakerService = require('../services/sneakerService');

const getHomePage = async (req, res) => {
    try {
        const sneakers = await sneakerService.getALLSneakers();
        res.render('index', {
            title: 'Sneaker Store',
            sneakers: sneakers
        });
    } catch (error) {
        console.error('Error fetching sneakers:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getHomePage
};