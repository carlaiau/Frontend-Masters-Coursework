/** @jsx jsx */
import { jsx } from 'theme-ui'
import  { graphql, Link, useStaticQuery } from 'gatsby' //useStaticQuery must be hard coded, no variables

const TableOfContents = () => {
    const data = useStaticQuery(graphql`
        query{
            allDocsPage{
                nodes {
                    id
                    title
                    path
                }
            }
        }
    `);
    
    const pages = data.allDocsPage.nodes

    return (
        <div>
            <h3>Explore the docs</h3>
            <ul>
                {pages.map( ({ id, title, path }) => (
                    <li key={id}>
                        <Link 
                            to={path}
                            sx={{
                                '&.active': {
                                    fontStyle: 'italic',
                                    textDecoration: 'none',
                                    '::after': { content: '" (currently viewing)"' }
                                }
                            }}
                            activeClassName="active"
                        >
                            {title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

export default TableOfContents
