'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

let sequelize;
sequelize = new Sequelize(process.env.DB_URANUS_DB, process.env.DB_URANUS_USER, process.env.DB_URANUS_PASS, {
	host: process.env.DB_URANUS_DB,
	dialect: process.env.DB_URANUS_DIALECT,
	port: process.env.DB_URANUS_PORT,
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

fs.readdirSync(__dirname)
	.filter(file =>
		(file.indexOf('.') !== 0) &&
		(file !== basename) &&
		(file.slice(-3) === '.js'))
	.forEach(file => {
		const model = sequelize.import(path.join(__dirname, file));
		db[model.name] = model;
	});

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
