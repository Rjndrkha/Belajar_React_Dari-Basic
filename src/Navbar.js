// import React from 'react'

//NAVBAR DENGAN FUNCTION
// export default function Navbar() {
//     return (
//         <div>
//             <h1>My Blog</h1>
//             <div className="links">
//                 <a href="/">Home</a>
//                 <a href="/create">New Blog</a>
//             </div>

//         </div>
//     )
// }

//NAVBAR DENGAN COMPONENT

import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>My Blog</h1>
                <div className="links">
                    <a href="/">Home</a>
                    <a href="/create">New Blog</a>
                </div>
            </div>
        )
    }
}
