import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  
  return (
    <header>
      <h1>
        <Link to="/">{site.siteMetadata.title}</Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/preguntas-frecuentes"
            >
              Preguntas Frecuentes
            </Link>
          </li>
          <li>
            <Link
              activeClassName={headerStyles.activeNavItem}
              className={headerStyles.navItem}
              to="/terminos-y-condiciones"
            >
              Términos y Condiciones
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
