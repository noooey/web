import React from 'react'
import './chart.css'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes, { number } from 'prop-types';

export default function Chart({ title, data, dataKey, grid }) {
    return (
        <div className='chart'>
            <h3 className='chartTitle'>{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke='#5550bd'/>
                    <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
                    <Tooltip />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray="5 5"/>}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

Chart.propTypes= {
    title: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        "Active User": number,
    })).isRequired,
    dataKey: PropTypes.string.isRequired,
    grid: PropTypes.bool.isRequired
};