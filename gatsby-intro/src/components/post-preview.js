import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'
// import { Img } from 'gatsby-image'
import ReadLink from './read-link'

const PostPreview = ({post}) => {
    const { slug, excerpt, title, image } = post
    const fluid = image.sharp.fluid
    
    // Does not work, why? No fucking idea
    // <Img fluid={fluid}/> 
    
    return (
        <article
            css={css`
                border-bottom: 1px solid #ddd;
                margin-top: 0;
                padding-bottom: 1rem;
                display: flex;
                :first-of-type{
                    margin-top: 1rem;
                }
            `}>

            <Link to={`/${slug}`} css={css`margin: 1rem 1rem 0 0; width: 100px`}>
                <img srcSet={fluid.srcSet} src={fluid.src} sizes={fluid.sizes} alt={title}/>
            </Link>
            <div>
                <h3>
                    <Link to={`/${slug}`}>{title}</Link>
                </h3>
                <p>{excerpt}</p>
                <ReadLink to={`/${slug}`}>Read this post &rarr;</ReadLink>
            </div>
        </article>
    )
}

export default PostPreview