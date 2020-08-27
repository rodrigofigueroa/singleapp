import React from 'react'
import { connect } from 'react-redux'
import PrimeraParte from './PrimeraParte/PrimeraParte'
import Segunda from './Segunda/Segunda'
import './SideB.css'
import { objectCreator } from '../../Redux/Actions/Artista'

const SideB = props => {
    
    const CreateCard = async value => {
        console.log(value)
        if( value !== undefined ){
            props.objectCreator(value)
        }}
    return (
        <section className="sideb">
            <PrimeraParte CreateCard={CreateCard}></PrimeraParte>
            <Segunda></Segunda>
        </section>
    )
}

const mapDispatchToprops = dispatch => ({
    objectCreator: value => dispatch( objectCreator(value) )
})

export default connect(null, mapDispatchToprops)(SideB)
