const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('------sql--------');

    await seedUsers();
    console.log('------SEEDED USERS--------');

    await seedPosts();
    console.log('-------SEEDED POSTS-------');

    await seedComments();
    console.log('------SEEDED COMMENTS--------');

    process.exit(0);
};

seedAll();