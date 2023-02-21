
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
        body.style.backgroundColor = "#e3ac17";
            break;
            case "cancer":
        body.style.backgroundColor = "#a432d1";
            break;
            case "Leo":
        body.style.backgroundColor = "#e3ac17";
            break;
            case "virgo":
        body.style.backgroundColor = "#a432d1";
            break;
            case "libra":
        body.style.backgroundColor = "#e3ac17";
            break;
            case "scorpio":
        body.style.backgroundColor = "#a432d1";
            break;
            case "sagittarius":
        body.style.backgroundColor = "#e3ac17";
            break;
            case "Capricorn":
        body.style.backgroundColor = "#a432d1";
            break;
            case "aquarius":
        body.style.backgroundColor = "#e3ac17";
            break;
            case "pisces":
        body.style.backgroundColor = "#a432d1";
            break;
    
        default:
       body.style.backgroundColor = "#ffff";

            break;
    }


}