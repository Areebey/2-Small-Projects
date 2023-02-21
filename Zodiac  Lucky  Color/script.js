
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
            case "gemini":
        body.style.backgroundColor = "";
            break;
            case "cancer":
        body.style.backgroundColor = "";
            break;
            case "Leo":
        body.style.backgroundColor = "";
            break;
            case "virgo":
        body.style.backgroundColor = "";
            break;
            case "libra":
        body.style.backgroundColor = "";
            break;
            case "scorpio":
        body.style.backgroundColor = "";
            break;
            case "sagittarius":
        body.style.backgroundColor = "";
            break;
            case "Capricorn":
        body.style.backgroundColor = "";
            break;
            case "aquarius":
        body.style.backgroundColor = "";
            break;
            case "pisces":
        body.style.backgroundColor = "";
            break;
    
        default:
            break;
    }


}