const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Waste of money in my opinion!',
        user_id: 6,
        post_id: 1
    },
    {
        comment_text: 'I think deepfakes can potentially do more harm than good',
        user_id: 6,
        post_id: 8
    },
    {
        comment_text: 'MongoDB is positioning itself as a leader in open-source database management',
        user_id: 3,
        post_id: 10
    },
    {
        comment_text: 'Life just keeps getting more expensive, huh?',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: "15 inch macbook? That's huge",
        user_id: 7,
        post_id: 5
    },
    {
        comment_text: 'I prefer cockroachDB!',
        user_id: 1,
        post_id: 10
    },
    {
        comment_text: 'Hmm interesting',
        user_id: 6,
        post_id: 7
    },
    {
        comment_text: 'Just when I though tech couldnt get any cooler!',
        user_id: 7,
        post_id: 4
    },
    {
        comment_text: 'Where is my invite mr.Musk?? I want to have fun too :( ',
        user_id: 6,
        post_id: 12
    },
    {
        comment_text: 'Uber is treading on thin ice with their business model',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'Not surprised, its all a money grab for the shareholders!',
        user_id: 3,
        post_id: 14
    },
    {
        comment_text: 'Wow this is super neat!',
        user_id: 5,
        post_id: 4
    },
    {
        comment_text: 'Hmm I wonder how long this has been happening',
        user_id: 4,
        post_id: 9
    },
    {
        comment_text: 'I dont like this one bit',
        user_id: 5,
        post_id: 14
    },
    {
        comment_text: 'Uber survives in london by the skin of their teeth!',
        user_id: 6,
        post_id: 2
    },
    {
        comment_text: 'Uber Shmoober, I use Lyft',
        user_id: 8,
        post_id: 2
    },
    {
        comment_text: 'Pfft I use the yellow cabs, dont care!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Hmm developers are taking their own action towards war I guess',
        user_id: 4,
        post_id: 11
    },
    {
        comment_text:"If the Boring Company can actually solve traffic issues, then I'm all for it",
        user_id: 5,
        post_id: 13
    },
    {
        comment_text:'Netflix has some interesting interactive shows/movies',
        user_id: 9,
        post_id: 6
    },
    {
        comment_text: 'Lets see how far they can take this feature!',
        user_id: 6,
        post_id: 4
    },
    {
        comment_text: 'Interesting move',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'Wow that was so realistic',
        user_id: 3,
        post_id: 8
    },
    {
        comment_text: 'Very cool, I approve of this',
        user_id: 8,
        post_id: 10
    },
    {
        comment_text: 'Get these kids jobs in cyber security haha',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'The cyber war is growing more than ever',
        user_id: 5,
        post_id: 3
    },
    {
        comment_text: 'Yikes I wonder what kind of repercussions they will face',
        user_id: 1,
        post_id: 15
    },
    {
        comment_text: 'I could use a macbook with a bigger screen',
        user_id: 4,
        post_id: 5
    },
    {
        comment_text: 'These deepfakes are getting more clever',
        user_id: 4,
        post_id: 8
    },
    {
        comment_text: 'Great for Mongo',
        user_id: 4,
        post_id: 10
    },
    {
        comment_text: 'great news!',
        user_id: 7,
        post_id: 5
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
