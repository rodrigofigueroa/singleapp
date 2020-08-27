import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Line } from 'react-chartjs-2'

const Charts = props => {
    const [ charData, setChartData ] = useState({})
    const chart = () => {
        setChartData({
            labels: ['monday', 'tuesday', 'wensday', 'thursday', 'friday'],
            datasets: [
                {
                    label: 'Label of something',
                    data: [ 12, 45 , 45, 45, 45],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }
    useEffect(() => {
        chart()
    }, [])
    return (
        <div className="container_chart">
            <Line data={charData}></Line>
        </div>
    )
}
const mapStateToProps = state => ({
    state
})
export default connect(mapStateToProps, null)(Charts)
