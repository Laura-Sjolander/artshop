import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ART_DETAIL_URL } from '../utils/urls'

import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'


const Background = styled.div`
    background-size: cover; 
    min-height: 100vh;
    position:relative;
    `

const GoBackButton = styled.button`
    position: absolute;
    top: 20px;
    left: 10px;
    padding: 17px;
    color: white;
    background-color:black;
    border: none;
    font-style:bold;
    font-size:15px;
    display: flex;
    svg {
        margin-right: 10px;
    }
`

const DetailContainer = styled.div`
    display:flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-direction:row; 
    padding: 10px;    
    margin-bottom: 0,5rem;
    position:absolute;
    bottom: 7px;
    left: 5px;
    background-color: rgba(220,220,220, 0.6);
    img {
        border: 5px solid #fff;
    }
    @media (max-width:667px){
        flex-direction: column;
        align-self: center;
        align-items: flex-start;
        right: 5px;
      
        img{
          min-width: 320px;
          height:60%;
          width:60%;
        }
    }
    `

const DescriptionContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    flex-direction:column; 
    padding: 10px; 
    max-width: 30vw; 
    overflow:auto;
     @media (min-width: 200px) and (max-width:667px){
        flex-direction: column;
        align-self: flex-end;
        max-width: 100%;
        h1{
            font-size: 21px;
        }
        h2{
            font-size: 19px;
        }
        p {
            font-size: 17px;
        }
    }
    @media (min-width: 668px){
        flex-direction: column;
        align-self: flex-end;
    }
             
    `

const ArtDetail = () => {
    const [art, setArt] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    const onBackButtonClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        fetch(ART_DETAIL_URL(id))
            .then((res) => res.json())
            .then((data) => setArt(data))
    }, [id])

    console.log(art)

    
    return (
        <article>
            <p>hello this is artdetail.js</p>
            <p>{`${art.artName}`}</p>
            
                
                <Background>
                <GoBackButton onClick={onBackButtonClick}><FaArrowLeft />Back to startpage</GoBackButton>
                    <DetailContainer>

                    
                    <DescriptionContainer className='decription-container'>
                        <h1>{art.artName}</h1>
                        <h2>{art.yearCreated}</h2>
                        <p>{art.colorCategory}</p>
                    </DescriptionContainer>


                    </DetailContainer>


                </Background>

                
         </article>
    )
}

export default ArtDetail

