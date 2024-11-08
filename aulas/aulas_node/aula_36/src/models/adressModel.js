const connection = require('../config/database/connection');
const { DataTypes } = require('sequelize');
const userModel = require('./usersModel')

let adressModel = connection.define('adresses', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: userModel,
            key: 'id',
        },
    },
    street: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    number : {
        type: DataTypes.STRING(5),
        allowNull: false
    }
})

module.exports = adressModel;