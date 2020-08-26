import React, { useState } from 'react'
import Input from '@material-ui/core/Input'
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
    const { loading, error, data} = useQuery(getArtist)

    const searchArtist = e => {
        let value = e.target.value
        setKeyVal(value)
        if( value.length >= 3){
            props.CreateCard(data)
        }
    }
    
    return (
        <section className="primeraParte">
            <Input style={{color : '#fff'}} placeholder="Coldplay" 
                onChange={searchArtist} ></Input>
            {keyVal}
        </section>
    )
}

export default PrimeraParte
