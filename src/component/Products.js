import React, { Component } from 'react'
import {store} from './Store'
import {Link} from 'react-router-dom'
export default class Products extends Component {
renderlist=(arr)=>arr.map(product=><Link to={`${store}`} ></Link>)
    render() {
        return (
            <div>
                <h1>product page</h1>
                <ul>

                </ul>
            </div>
        )
    }
}
