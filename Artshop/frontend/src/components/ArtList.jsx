import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ART_LIST_URL} from '../utils/urls'


const ArtSection = styled.section`
width: 100%;
display: flex;
flex-wrap: wrap;
background-color: rgba(0,0,0,0.75);
position: relative;
`

const ArtCard = styled.article`
position: relative;
flex: 25%;
a img {
    width: 100%;
    height: 100%;
    display: flex;
    border: 5px solid #fff;
}
p {
    position: absolute;
    bottom: 10px;
    left: 18px;
    color: black;
    background: white;
    opacity: 0.7;
    padding: 5px 10px;
    font-size: 25px;
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
            {artList.map((art) => {
                
                return (
                    
                    <ArtCard key={art.id}>
                        {<Link to={`/art/${art.id}`}>
                        <p>{`${art.artName}`}</p>
                         
                         <img src={require(`../assets/${art.imageName}`)} />
                        
                        
                        </Link>}
                    </ArtCard>
                   
                )
            })}
        </ArtSection>
    )
}

export default ArtList