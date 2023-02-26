import React from "react";
import Navbar from "./Components/Navbar";
import Card from './Components/Card'
import {data} from './data.js'

export default function App () {
    const cards = data.map(item => {
        return (
            <Card content={item} />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
            <footer><small>Created with power 🔥 by</small><strong><a href="https://twitter.com/SreeSen03"> @SreeSen03</a></strong></footer>
        </div>
    )
}