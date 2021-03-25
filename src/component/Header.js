import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
           <nav className= "navbar">
               <ul className= "navlist">

                   <Link to = "/">
                   <li>Home</li>
                   </Link>

                   <Link to = "/products">
                   <li>product</li>
                   </Link>

               </ul>
           </nav>
        )
    }
}
