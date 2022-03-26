const { Post } = require('../models');

const postdata = [
    {
        title: "Update on FitBit's watch OS",
        post_content: 'Fitbit is in the works for a new operating system for their tech watches',
        user_id: 10
    },
    {
        title: 'Uber Granted 30-Month license to Operate in London',
        post_content: "Shocker as London's transportation regulator revoked Uber's license twice in the past",
        user_id: 8
    },
    {
        title: 'Russian military reportedly hacked into European satellites at start of Ukraine war',
        post_content: 'The previously unattributed cyberattack has now been traced back to Russia, US officials told The Washington Post',
        user_id: 1
    },
    {
        title: 'Nvidia shows off AI model that turns a few dozen snapshots into a 3D-rendered scene',
        post_content: 'Functions are one of the fundamental building blocks in JavaScript.',
        user_id: 4
    },
    {
        title: 'Apple is reportedly planning a 15-inch MacBook Air',
        post_content: 'Apple’s upcoming MacBook Air redesign has been extensively reported on, but new information suggests it may come in two sizes: 13" and 15"',
        user_id: 7
    },
    {
        title: 'Netflix bought yet another studio as part of gaming push',
        post_content: 'The company announced that it has acquired Boss Fight Entertainment, a mobile studio based in Texas. It’s the third game studio that Netflix has scooped up following Oxenfree developer Night School and Next Games',
        user_id: 4
    },
    {
        title: 'Europe agrees new law to curb Big Tech dominance',
        post_content: 'Under the Digital Markets Act (DMA), giants such as Google and Apple will be forced to open up their services and platforms to other businesses',
        user_id: 1
    },
    {
        title: 'Deepfakes are now trying to change the course of war',
        post_content: "In the third week of Russia's war in Ukraine, Volodymyr Zelensky appeared in a video, dressed in a dark green shirt, speaking slowly and deliberately while standing behind a white presidential podium featuring his country's coat of arms. Except for his head, the Ukrainian president's body barely moved as he spoke. His voice sounded distorted and almost gravelly as he appeared to tell Ukrainians to surrender to Russia.",
        user_id: 1
    },
    {
        title: 'Former Microsoft Employee Alleges Bribery Scheme in Middle East and Africa',
        post_content: 'Microsoft Corp. said this week that it had fired some employees and terminated partnerships in relation to allegations made public Friday of bribery in its sales efforts in the Middle East in recent years',
        user_id: 9
    },
    {
        title: 'MongoDB Expands Collaboration with AWS',
        post_content: 'MongoDB has announced an expansion of a multi-year strategic collaboration agreement (SCA) with Amazon Web Services, Inc. (AWS). Under this 6-year agreement, MongoDB and AWS have committed to a broad range of initiatives to make it easier for joint customers to advance their cloud adoption journey, including integrated go-to-market activities across sales and marketing, developer enablement and training through shared developer relations activities, and both technology integrations and commercial incentives to streamline the migration of on-premises workloads to MongoDB Atlas on AWS.',
        user_id: 5
    },
    {
        title: 'JavaScript library updated to wipe files from Russian computers',
        post_content: "The developer of JavaScript library node-ipc, which is used by the popular vue.js framework, deliberately introduced a critical security vulnerability that, for some netizens, would destroy their computers' files.",
        user_id: 2
    },
    {
        title: 'Tesla sends out ‘Cyber Rodeo’ invites for Giga Texas opening',
        post_content: 'Tesla has started to send out invites to an event called ‘Cyber Rodeo’, which is going to be the grand opening of Gigafactory Texas in Austin – a big moment for the company and its manufacturing expansion in the US.',
        user_id: 10
    },
    {
        title: "San Antonio negotiating with Elon Musk's Boring Co. on possible airport-to-downtown tunnel",
        post_content: "San Antonio's top transportation planning agency has agreed to negotiate with the Boring Co., Elon Musk's tunneling and infrastructure firm, to potentially build a loop of tunnels between San Antonio International Airport and the city's downtown.",
        user_id: 8
    },
    {
        title: 'Apple will reportedly sell the iPhone as a subscription service',
        post_content: 'Apple is reportedly working on selling iPhones and iPads themselves as part of a hardware subscription service, according to a new report from Bloomberg, whose author Mark Gurman writes the service could arrive next year.',
        user_id: 6
    },
    {
        title: 'Seven teenagers arrested in connection with the Lapsus$ hacking group',
        post_content: 'Lapsus$ has taken responsibility for some major security breaches at tech companies, including Nvidia, Samsung, Ubisoft, Okta, and Microsoft. On Wednesday, reports surfaced indicating an Oxford-based teenager is the mastermind of the group. City of London Police did not say if this teenager was among those arrested.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
