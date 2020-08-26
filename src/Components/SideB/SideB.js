import React, { Component } from 'react'
import { connect } from 'react-redux'
import PrimeraParte from './PrimeraParte/PrimeraParte'
import './SideB.css'

const SideB = props => {
    
    const CreateCard = value => {
        console.log(value)
        
    }
    return (
        <section className="sideb">
            <PrimeraParte CreateCard={CreateCard}></PrimeraParte>
        </section>
    )
}


export default SideB
