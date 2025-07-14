const root = document.querySelector('.root');



let temperature = parseInt(prompt("What is the temperature currently in your area ?"));
let temperatureCondition;
let dangerStatus;
let additionalAdvice;
dangerStatus = temperature < -5 || temperature > 40 ? dangerStatus = "Dangerous temperature" : dangerStatus = "Safe temperature";


temperatureCondition = temperature < 0 ? temperatureCondition = "Freezing cold" :
    temperature >= 0 && temperature <= 15 ? temperatureCondition = "Cold" :
        temperature >= 16 && temperature <= 25 ? temperatureCondition = "Mild" :
            temperature >= 26 && temperature <= 35 ? temperatureCondition = "Warm" : "Hot";

additionalAdvice = temperature >= 16 && temperature <= 25 ? additionalAdvice = "Perfect for outdoor activities!" : temperature > 30 ? additionalAdvice = "Stay hydrated!" : "";

console.log(`The weather is ${temperatureCondition} but it's a ${dangerStatus}. ${additionalAdvice} `);
alert(`The weather is ${temperatureCondition} but it's a ${dangerStatus}. ${additionalAdvice} `);



root.innerHTML = `<h1>The weather is ${temperatureCondition} but it's a ${dangerStatus}. ${additionalAdvice}</h1>`;



root.style.textAlign = 'center';
