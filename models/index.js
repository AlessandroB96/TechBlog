const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//creating associations between tables
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//must make reverse association to complete model link 
//belongsTo tells the server that a post can only belong to 1 user
Post.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

module.exports = {User, Post, Comment};
