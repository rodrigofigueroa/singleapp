/**
 * Lado derecho parte del buscador e interaccion con
 * Redux
 */
import React from 'react'
import { connect } from 'react-redux'
import PrimeraParte from './PrimeraParte/PrimeraParte'
import Segunda from './Segunda/Segunda'
import './SideB.css'
import { objectCreator } from '../../Redux/Actions/Artista'

const SideB = props => {
    //Funcion para recibir los datos se le agrego un if por si llega undefined
    // utilizamos la funcion dispatch para enviar los datos al estado de Redux
    const CreateCard = value => {
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
// Redux dispatch
const mapDispatchToprops = dispatch => ({
    objectCreator: value => dispatch( objectCreator(value) )
})

export default connect(null, mapDispatchToprops)(SideB)
