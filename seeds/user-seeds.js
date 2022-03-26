const { User } = require('../models');

const userdata = [
    {
        username: 'randy12',
        email: 'ran12@gmail.com',
        password: '123456'
    },
    {
        username: 'markV5',
        email: 'mark12@gmail.com',
        password: '12345'
    },
    {
        username: 'Gengi1345',
        email: 'gengiluvssoup@gmail.com',
        password: 'password88'
    },
    {
        username: 'RachelAnz321',
        email: 'bballRachel@gmail.com',
        password: 'ricepudding'
    },
    {
        username: 'Stannks5421',
        email: 'stanks@gmail.com',
        password: 'tiramisulover'
    },
    {
        username: 'Hiesenburg52',
        email: 'mrWhite@yahoo.com',
        password: 'ilovechemistry'
    },
    {
        username: 'HankHill43',
        email: 'ilovepeggy@yahoo.com',
        password: 'propaneislife'
    },
    {
        username: 'TheRealClarkKent',
        email: 'hero@theDailyPlanet.com',
        password: 'strongestmanever'
    },
    {
        username: 'Maria32Maria',
        email: 'maria32@gmail.com',
        password: 'marialovespie'
    },
    {
        username: 'Elongated_Muskrat',
        email: 'emusk@spaceX.com',
        password: 'electrifytheworld'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;