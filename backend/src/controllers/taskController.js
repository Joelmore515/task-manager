const {where} = require('sequelize');
const {Task} = require('../models');

// obtener las tareas 
exports.getTasks = async(req, res) => {
    const tasks = await Task.findAll({
        where: {userId: req.user.id}
    });
    res.json({tasks});
};

// crear tareas 
exports.createTask = async(req, res) => {
    const task = await Task.create({
        title: req.body.title,
        description: req.body.description,
        userId: req.user.id
    });
    res.json({task});

};

// actualizar tarea 
exports.updateTask = async(req, res) => {
    const {id} = req.params;
    await Task.update(req.body, {
        where: {id}
    });
    res.json({message: 'Tarea actualizada'});
};

// eliminar tareas 
exports.deleteTask = async(req, res) => {
    const {id} = req.params;
    await Task.destroy({
        where: {id}
    });
    res.json({message: 'Tarea eliminada'});
};
