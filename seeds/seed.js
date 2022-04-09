const sequelize = require('../config/connection');
const { User, Captured } = require('../models');

const userData = require('./userData.json');
const capturedData = require('./capturedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });

  const captured = await Captured.bulkCreate(capturedData, {
    individualHooks: true,
    returning: true
  });

  process.exit(0);
};

seedDatabase();
