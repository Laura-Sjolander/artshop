import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ART_LIST_URL} from '../utils/urls'

const ArtSection = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(0,0,0,0.75)
    
`

const ArtCard = styled.article`
display: flex;
flex: 25%;

    a img {
        width: 100%;
        height: 100%;
        display: flex;
    }
  `

 const ArtList = () => {

    const [artList, setArtList] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/art`)
        //fetch(ART_LIST_URL)
            .then((res) => res.json())
            .then((data) => {
                setArtList(data)
            })
  }, 
  [])

    return (
        <ArtSection>
            <p> showing artlist.js </p>
            {artList.map((art) => {
                
                return (
                    <ArtCard key={art.id}>
                        <p>{`${art.artName}`}</p>
                         {<Link to={`/art/${art.id}`}>
                           
                        </Link>}
                        {/* <Link to={`/art/${art.id}`}>
                            <img src={urls} alt={art.artName} />
                        </Link> */}
                    </ArtCard>
                )
            })}
        </ArtSection>
    )
}

export default ArtList