const celcius = document.getElementById("celcius")
const fahrenheit = document.getElementById("fahrenheit")
const kelvin = document.getElementById("kelvin")



function computeTemp(event){
    const inputVal = +event.target.value
    
    switch (event.target.name) {
        case "celcius":
            kelvin.value = (inputVal + 273.15).toFixed(2)
            fahrenheit.value = (inputVal * 1.8 + 32 ).toFixed(2)
            break;
        case "fahrenheit":
            celcius.value = ((inputVal - 32) / 1.8).toFixed(2)
            kelvin.value = ((inputVal - 32 ) / 1.8 + 273.15).toFixed(2)
            break;
        case "kelvin":
            celcius.value = (inputVal - 273.15).toFixed(2)
            fahrenheit.value = ((inputVal - 273.15) * 1.8 + 32).toFixed(2)
            break;
        default:
            break; 
    }  
}
