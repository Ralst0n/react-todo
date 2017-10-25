const Sequelize = require('sequelize');

const Task = sequelize.define('task',{
	content: {
		type: Sequelize.STRING
	},
	completed: {
		type: Sequelize.Bool
	}
});

Task.sync({force: true}).then(() => {
	return Table.create({
		content: 'Leave Work',
		completed: false
	})
})

