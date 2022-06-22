import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { ART_LIST_URL} from '../utils/urls'


const ArtSection = styled.section`
    width: 100%;
    display: flex;
    //flex-wrap: wrap;
    // background-image: linear-gradient(to bottom right, #b7bdc2, #e0dbe1);
    
`

const ArtCard = styled.article`
display: flex;
flex: 25%;
flex-wrap: wrap;

a:link {
    text-decoration: none;
   
  }

  a img {
        width: 50%;
        height: 50%;
        display: flex;
    }

    p {
        font-size: 12px;
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
                        
                        {/* <Link to={`/art/${art.id}`}>
                            <img src={urls} alt={art.artName} />
                        </Link> */}
                        </Link>}
                    </ArtCard>
                   
                )
            })}
        </ArtSection>
    )
}

export default ArtList