const sneakerService = require('../services/sneakerService');

const getHomePage = async (req, res) => {
    try {
        const id = req.params.id;
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

const getProductsPage = async (req, res) => {
    try {
        const sneakers = await sneakerService.getALLSneakers();
        res.render('index', {
            title: 'Products - Sneaker Store',
            sneakers: sneakers
        });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Internal Server Error');
    }
};

const getProductDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const sneaker = await sneakerService.getSneakerById(id);

        if (!sneaker) {
            return res.status(404).send('Product not found');
        }

        res.render('sneaker-detail', {
            title: `Sneaker ${id} - Detail`,
            sneaker: sneaker
        });
    } catch (error) {
        console.error('Error fetching sneaker detail:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getHomePage,
    getProductsPage,
    getProductDetail
};