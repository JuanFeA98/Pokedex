import React from 'react'

import '../styles/header.css'

export default function header() {
    return (
        <div className='Header'>
            <div className='On_Off'>
                <div className='brightness'>
                </div>
            </div>
            <div className="light_bulbs red_bulb">
                <div className="brightness_bulbs"></div>
            </div>
            <div className="light_bulbs yellow_bulb">
                <div className="brightness_bulbs"></div>
            </div>
            <div className="light_bulbs green_bulb">
                <div className="brightness_bulbs"></div>
            </div>
        </div>
    )
}
