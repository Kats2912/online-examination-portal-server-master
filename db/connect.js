const mongoose = require('mongoose');

const connectDB = async uri => {
    try {
		await mongoose.connect(uri);
		console.log('Database Connected');
	} catch (error) {
		console.log('An Error occured!');
		console.log(error);
		process.exit(1);
	}
}

module.exports = connectDB;