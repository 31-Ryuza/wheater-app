const request = require('request')

const negara = process.argv[2]
const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${negara}.json?access_token=pk.eyJ1Ijoicnl1emFhbHlzeWFocHV0cmEiLCJhIjoiY2t4aGJ1NnR0MDBwdzJvcXR4cXB2NGU2NSJ9.iswR76hLoGWrVlHCFLozAg&limit=1`

if(negara){
        request({url:url , json:true}, (error, request) => {
            const features = request.body.features[0]
            console.log(`${negara} berada di koodinat ${features.center[0]} dan ${features.center[1]}`)
        })   
}else{
    console.log('Maaf negara yang anda cari tidak di temukan')
}