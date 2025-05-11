const Router = require('express')
const router = new Router()
const controller = require('../controllers/carController')

router.get("/brands", controller.getBrands)

module.exports = router