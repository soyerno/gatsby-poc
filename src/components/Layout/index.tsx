import React from "react"
import Footer from "../Footer"
import Header from "../Header"

import '../../styles/index.scss'
import '../../styles/leamos.scss'

import layoutStyles from "./layout.module.scss"

const Layout = ({ children }) => (
  <div className={layoutStyles.container}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
)

export default Layout
