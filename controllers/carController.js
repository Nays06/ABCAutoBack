const Brands = require("../models/Brands");

class CarController {
    async getBrands(req, res) {
        try {
            const brands = await Brands.find({})
            res.status(200).json(brands)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка на сервере" })
        }
    }
}

module.exports = new CarController()