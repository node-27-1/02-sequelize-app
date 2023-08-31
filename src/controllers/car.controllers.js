const catchError = require('../utils/catchError');
const Car = require('../models/Car');

const getAll = catchError(async(req, res) => {
    const cars = await Car.findAll();
    return res.json(cars);
});

const create = catchError(async(req, res) => {
    const { brand, model, year, color } = req.body;
    const carBody = {
        brand,
        model,
        year,
        color,
    }
    const car = await Car.create(carBody);
    return res.status(201).json(car);
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const car = await Car.findByPk(id);
    return res.json(car);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Car.destroy({ where: { id } });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const { brand, model, year, color } = req.body;
    const car = await Car.update({
        brand, color, year, model
    }, { where: { id }, returning: true });
    return res.json(car);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}
