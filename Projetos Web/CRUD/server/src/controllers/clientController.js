const taskModel = require('../models/taskModel')

const getAll = async (req, res) => {
    const taskMo = await taskModel.getAll()
    return res.status(200).json(taskMo)
}

module.exports = {
    getAll,
}