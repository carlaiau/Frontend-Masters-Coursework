import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
    const data = useStaticQuery(graphql`
    query{  
        allMdx {
            nodes {
                frontmatter{
                    title
                    slug
                    author
                    image {
                        sharp: childImageSharp{
                            fluid(
                                maxWidth: 100
                                maxHeight: 100
                                duotone: { shadow: "#663399", highlight: "#ddbbff" }
                            ){
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                excerpt
            }
        }
    }`)

    return data.allMdx.nodes.map(post => {
        const {title, author, slug, image } = post.frontmatter
        const excerpt = post.excerpt
        return { title, author, slug, excerpt, image }
    })
}

export default usePosts