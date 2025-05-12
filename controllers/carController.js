const Brands = require("../models/Brands");
const Car = require("../models/Car");

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

    async getCars(req, res) {
        try {
            const cars = await Car.find({}).limit(2)
            res.status(200).json(cars)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Ошибка на сервере" })
        }
    }
}

module.exports = new CarController()