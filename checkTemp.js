let temperature = prompt("Sisesta katla temperatuur (0-60kraadi)");

function checkTemp(temperature){
    if (temperature >= 0 && temperature <= 20){
        return(-1);
    }
    else if (temperature > 20 && temperature <= 40){
        return(0);
    }
    else if (temperature > 40 && temperature <= 60){
        return(1);
    }
}


checkTemp(temperature);
