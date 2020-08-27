import React, { Component } from 'react'
import { connect } from 'react-redux'
import Option from './Option/Option'
import Charts from '../Charts/Charts'
import './SideA.css'

export class SideA extends Component {
    render() {
        return (
            <section className="sidea">
                {/* <nav>
                    <Option name="Search"/>           
                    <Option name="Home"/>           
                    <Option name="Playlist"/>           
                    <Option name="Library"/>           
                </nav> */}
                <Charts></Charts>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SideA)
