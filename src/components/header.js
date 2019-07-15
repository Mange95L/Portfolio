import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)
    const signOne = '<'
    const signTwo = ' />'

    return (
        <header className={headerStyles.header}>
            <h1>
                <Link className={headerStyles.title} to="/"><strong className="markupSpecialColor">{signOne}</strong>{data.site.siteMetadata.title}<strong className="markupSpecialColor">{signTwo}</strong></Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li> <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/">Start</Link> </li>
                    {/* <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/blog">Blog</Link></li> */}
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/about">Om</Link></li>
                    <li><Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to="/contact">Kontakt</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header