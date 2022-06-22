import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ART_DETAIL_URL } from '../utils/urls'

//import { Link } from "react-router-dom"

import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'

const ArtContainer = styled.main`
  max-width: 1400px;
  margin: auto;
  margin-bottom: 80px;
  padding: 10px;

  min-height: calc(100vh - 80px - 120px - 80px);

  @media (max-width: 667px) {
    padding: 0;
  }
`
const ArtPageContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  & article,
  picture {
    width: 50%;
    object-fit: cover;
  }

  & img {
    height: 900px;
    width: 50%;
    object-fit: cover;
    margin-bottom: -4px;
    padding: 10px;

    
  }

  @media (max-width: 1024px) {
    & article,
    picture {
      width: 50%;
      height: 100%;
    }

    & img {
      height: 50% !important;
    }
  }

  @media (max-width: 667px) {
    & img {
      width: 100%;
      height: 100%;
      padding: 5px 0;
    }
  }
`

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
        flex-direction:row; 
        justify-content: space-between;
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

    return (
        <ArtContainer>
            <ArtPageContainer>
                <picture>
                <img src={require(`../assets/${art.imageName}`)}
                        alt={art.imageName}
                    />
                </picture>

                <article>
                    <div style={{ padding: "40px", textAlign: "right" }}>
                    <DescriptionContainer className='decription-container'>
                        <h1>{art.artName}</h1>
                        <h2>{art.yearCreated}</h2>
                        <p>{art.colorCategory}</p>
                        <p>{art.price}SEK</p>
                        <p>{art.description}</p>
                    </DescriptionContainer>
                        <button
                            onClick={() => onBackButtonClick()}
                        >BACK</button>
                    </div>
                </article>

            </ArtPageContainer>
        </ArtContainer>
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

