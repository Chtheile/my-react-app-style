import React from 'react'
import Link from 'gatsby-link'
import './Header.css';

const Header = ({ siteTitle }) => (
 <div className="Header">
 <div className="HeaderGroup">
  <Link to="/"><img src={require('../images/logo-designcode.svg')} with="30"></img> </Link>
  <Link to="/cources">Cources</Link>
  <Link to="/downloads">Downloads</Link>
  <Link to="/workshops">Workshops</Link>
  <Link to="/buy"><button>Buy</button> </Link>
 </div>
 </div>
)

export default Header
