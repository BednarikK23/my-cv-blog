const trendingPosts = require('./mock/trending');
const featuredPosts = require('./mock/featured');

const fs = require('fs');
const path = require('path');

module.exports = {
    resolvers: {
        Query: {
            trendingPosts: () => trendingPosts,
            featuredPosts: () => featuredPosts,
            recentPosts: () => [
                ...trendingPosts,
                ...featuredPosts,
                ...featuredPosts
                ]
        }
    },
    schema: fs.readFileSync(
        path.resolve(
            __dirname,
            './post-schema.graphql'
        )
    ).toString()
}
