'use strict';
module.exports = (sequelize, DataTypes) => {
	const Article = sequelize.define('article', {
		author_id: DataTypes.INTEGER,
		uuid: DataTypes.UUIDV4,
		slug: DataTypes.STRING,
		title: DataTypes.STRING,
		content: DataTypes.STRING,
		tags: DataTypes.STRING
	}, {});

	Article.associate = function(models) {
		Article.hasOne(models.User, {
			foreignKey: 'id',
		});
	};
	return Article;
};