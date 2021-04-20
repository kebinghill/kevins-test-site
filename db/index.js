const { Models, DataTypes, Sequelize } = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost/kts_db'
);

const syncAndSeed = async () => {
  await db.sync({ force: true });
};

module.exports = {
  syncAndSeed,
};
