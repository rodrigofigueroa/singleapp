import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import './PrimeraParte.css'
import { gql, useQuery } from '@apollo/client'

const PrimeraParte = props => {   
        const [keyVal, setKeyVal ] = useState(null)
        const getArtist = gql`
            {
            queryArtists( byName: "${keyVal}" ) {
            name
            id
            image
            }
        }
        `
    const { data } = useQuery(getArtist)

    const searchArtist = e => {
        e.preventDefault()
        setTimeout(() => {
            props.CreateCard(data)
        },2000)
    }

    const handleOnchange = e => {
        let value = e.target.value
        setKeyVal(value)
    }
    
    return (
        <section className="primeraParte">
            <form onSubmit={searchArtist }>
                <Input style={{color : '#fff'}} onChange={handleOnchange} placeholder="Coldplay" ></Input>
                <Button onClick={searchArtist } variant="contained" color="primary">Buscar</Button>
            </form>
            {keyVal}
        </section>
    )
}

export default PrimeraParte
