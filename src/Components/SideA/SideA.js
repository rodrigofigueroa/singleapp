/** */
/* Creacion del componente SideA
 * para la parte de lado izquierdo (Menu lateral)
 * Al final se agrego una Grafica con información 
 * Aleatoria pero se quito por que no era necesaria
/** */
import React, { Component } from 'react'
import Option from './Option/Option'
import { connect } from 'react-redux'
import './SideA.css'

export class SideA extends Component {
    render() {
        return (
            <section className="sidea">
                <Option name="Search"></Option>
                <Option name="Home"></Option>
                <Option name="Library"></Option>
            </section>
        )
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SideA)
