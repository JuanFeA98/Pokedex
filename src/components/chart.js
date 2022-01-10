import React from 'react'
import { Doughnut } from 'react-chartjs-2'

export default function chart() {
    const data = {
        labels: ['Red', 'Green', 'Yellow'],
        datasets: [{
            data: [300, 50, 100],
        }]
    }

    return (
        <div>
            <Doughnut data = {data}/>
        </div>
    )
}
