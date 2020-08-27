import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import './Segunda.sass'

const Segunda = props =>  {
        const { state } = props
        let [artist, setArtist ] = useState(null)
        useEffect( () => {
            console.log(state)
                setArtist(state)
        },[state])
        return (
            <div className="container_card">
                {
                    state !== undefined
                    ?
                        <>                        
                            {state.spoty.value.queryArtists.map( ( item ) => {
                                return (
                                    <section className="card" key={item.id}>
                                        <figure>
                                            <img src={item.image} alt="huhuhu"></img>
                                        </figure>
                                        <div className="txt">
                                            <h2>{item.name}</h2>
                                            <p>{item.id}</p>
                                        </div>
                                    </section>
                                )
                            })}
                            
                        </>
                    :
                    <section className="card">
                        <figure>
                            <img src="http://lorempixel.com/output/animals-q-c-1021-830-10.jpg" alt="huhuhu"></img>
                        </figure>
                        <div className="txt">
                            <h2>Busca algo</h2>
                            <p>
                                Intenta
                            </p>
                        </div>
                    </section>
                
                }
                
            </div>
        )
}

const mapStateToProps = state => ({
    state
})

export default connect(mapStateToProps, null)(Segunda)
