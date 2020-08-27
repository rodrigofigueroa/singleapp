import React from 'react'
import { Chart } from 'react-charts'
function Mychart(){
    const axes = React.useMemo(
        () =>[
            { primary: true, type: 'linear', position: 'bottom' },
            { type: 'linear', position: 'left' },
        ],
        []
    )
    const data = React.useMemo(
     () =>[
            {
                label: 'Series 1',
                data: [
                { primary: 1, secondary: 10 },
                { primary: 2, secondary: 10 },
                { primary: 3, secondary: 10 },
                ],
          }
     ],
     []
    )
}
const Charts = props => {
    
    return (
        <div>
            <Chart data={data} axes={axes}></Chart>
        </div>
    )
}
export default Charts
