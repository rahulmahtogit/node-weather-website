console.log("Client Side JavaScript is loaded")

const weatherForm = document.querySelector('form') 
const search = document.querySelector("input")
const messageOne = document.querySelector("#message-1")
const messageTwo = document.querySelector("#message-2")
// messageOne.textContent = "From Javascript"



weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
  

fetch(`http://localhost:3000/weather?address=${location}`,
).then((response) =>{
    response.json().then(data=>{
        
        if (data.error){
            messageOne.textContent = data.error  
        }
        else{
            messageOne.textContent = data.forecast_info.loc

            w_info = `You are in ${data.forecast_info.loc} and There is ${data.forecast_info.temp} celicus outside and Chance of rain is ${data.forecast_info.prec} Percent` 


        messageTwo.textContent = w_info
        }
        
    })
})

})