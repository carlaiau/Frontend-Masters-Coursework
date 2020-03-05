module.exports = {
    siteMetadata: {
        title: 'Frontend Masters Workship',
        description: 'A site we built today'
    },
    plugins: [
        'gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve('./src/components/layout.js')
                },
                gatsbyRemarkPlugins: [
                    {resolve: 'gatsby-remark-images'}
                ]
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: 'posts'
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: 'images'
            }
        },
        {
            resolve: 'gatsby-source-instagram',
            options: {
                username: 'themarketnz'
            }
        }
    ]
}