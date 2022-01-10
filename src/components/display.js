import React from 'react'

import '../styles/display.css'
import Chart from './chart.js'

export default function display() {
    return (
        <section className='Display'>
            <div className='screen_container'>
                <form className="screen">
                    <input type="text" placeholder='Search'/>
                    <button>Go!</button>
                </form>
                <div className="screen_showing">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="" />
                </div>
                <h3>Charizard</h3>
                {/* <Chart/> */}
            </div>
        </section>
    )
}
