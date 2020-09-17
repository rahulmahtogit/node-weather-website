const request = require("request")

const forecast = (lat,lon,callback) =>{
    const url = "http://api.weatherstack.com/current?access_key=e76766dc63131c01412b284db7650d38&query="+ lat +","+ lon
    request({url,json:true},(error,{body} = {})=>{
        if (error){
            callback("Unable to connect to services",undefined)
        }
        else if(body.error){
            callback("Unable to find location",undefined)
        }
        else{
            callback(undefined,{
                temp: body.current.temperature,
                prec:body.current.precip,
                loc:body.location.name
        })
        }
    })
}
module.exports = forecast

