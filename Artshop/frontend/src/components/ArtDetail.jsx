import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ART_DETAIL_URL } from '../utils/urls'

//import { Link } from "react-router-dom"

import styled from 'styled-components'
import { FaArrowLeft, FaCartPlus  } from 'react-icons/fa'

const Background = styled.div`
    background-size: cover; 
    min-height: 84vh;
    position:relative;
    background-color: gray;
    `

const GoBackButton = styled.button`
    position: absolute;
    top: 20px;
    left: 18px;
    padding: 15px;
    color: white;
    background-color: black;
    border: none;
    font-size: 15px;
    display: flex;
    z-index: 1;
    opacity: 0.5;
    border-radius: 5px;
}
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
    margin-bottom: 0.5rem;
    bottom: 7px;
    left: 5px;
    position: absolute;
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

const ImageDescriptionContainer = styled.div`
    display:flex;
    justify-content:flex-end;
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
    const [loading, setLoading] = useState(true)

    const onBackButtonClick = () => {
        navigate(-1);
    }

    useEffect(() => {
        setLoading(true)
        fetch(ART_DETAIL_URL(id))
            .then((res) => res.json())
            .then((data) => {
                setArt(data)
                setLoading(false)
            })

    }, [id])

    // console.log(art)
    if (loading) return <></>;
    //const poster = `../assets/${art.imageName}`;
    const backdrop = `https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg`;

    return (
        <article>
            <Background  style={{ backgroundImage: `url(${backdrop})` }}>
                <GoBackButton onClick={onBackButtonClick}><FaArrowLeft />Back to artlist</GoBackButton>
                <DetailContainer className='detail-container'>
                    <img src={require(`../assets/${art.imageName}`)} alt={art.imageName} />
                    <ImageDescriptionContainer className='image-description-container'>
                        <h1>Name:{art.artName}</h1>
                        <h2>Year: {art.yearCreated}</h2>
                        <p>Colour: {art.colorCategory}</p>
                        <p>Price:{art.price}SEK</p>
                    </ImageDescriptionContainer>
                    <FaCartPlus  /> 
                </DetailContainer>
            </Background>
        </article>
    );

//     return (
//         <article>
//             <p>{`${art.artName}`}</p>



//             <Background>
//                 <GoBackButton onClick={onBackButtonClick}><FaArrowLeft />Back to startpage</GoBackButton>
//                 <DetailContainer>


//                     {!loading && <DescriptionContainer className='decription-container'>
//                         <h1>{art.artName}</h1>
//                         <h2>{art.yearCreated}</h2>
//                         <p>{art.colorCategory}</p>

//                         <img src={require(`../assets/${art.imageName}`)} alt="image-of-art"/>
//                         {/* <img src={require(`../assets/eagle.jpg`)} /> */}



//                     </DescriptionContainer>}
//                     {/* <img src={require(`../assets/${art.imageName}`)} />  */}

//                 </DetailContainer>


//             </Background>


//         </article>
//     )
}

export default ArtDetail

