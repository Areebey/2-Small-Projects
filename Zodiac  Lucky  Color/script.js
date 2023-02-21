
const zodiac=document.getElementById("zodiac");

const changeBackground=()=>{
    console.log(zodiac.value)

    switch (zodiac.value) {
        case "aries":
        body.style.backgroundColor = "#e3ac17";
            break;
        case "taurus":
        body.style.backgroundColor  = "#a432d1";
            break;
            
    
        default:
            break;
    }


}