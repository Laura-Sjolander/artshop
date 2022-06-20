//const API_KEY = 'somekey'- which you hide in ENV file?

//export const ART_LIST_URL = `../backend/artData.json`

export const ART_LIST_URL = `http://localhost:8080/art`


export const ART_DETAIL_URL =(artId) => `http://localhost:8080/art/${artId}`

//export const ART_DETAIL_URL =(artId) => `http://localhost:8080/art`

//export const ART_IMAGE_URL = flickr? 

//export const ART_DETAIL_URL = (artId) => `../backend/artData.json/${artId}`