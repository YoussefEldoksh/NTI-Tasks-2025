
let inputForm = document.getElementById("event-form");
let eventName = document.getElementById("event-name");
let timeTillEvent = document.getElementById("time");

let card = document.querySelector("#outer-box");


inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let myEvent = {
        Name: eventName.value,
        time: parseInt(timeTillEvent.value)
    }

    if (isNaN(myEvent.time) || myEvent.time <= 0) {
        alert("Please enter a valid positive number for time.");
        return;
    }

    
    console.log(myEvent);
    let sec = myEvent.time;
    card.innerHTML = `
    <div class="card text-center mb-3" style="width: 18rem; color:aliceblue  ;background-color: rgb(59, 43, 81);box-shadow:
    10px 40px 100px 20px rgba(0, 0, 0, 0.7), 0 -40px 80px rgba(102, 106, 135, 0.3); height: fit-content">
  <div class="card-body">
    <h5 class="card-title">Time Remaining For ${myEvent.Name}</h5>
    <div style="background:transparent; margin:10%;">
        <p class="card-text" id="timer" style="font-size:20pt; text-wrap:pertty;">
          ${myEvent.Name}
        </p>
    </div>
  </div>
</div>
`;

countDown(myEvent.time);

    
});

function countDown(seconds)
{
  let timerElement = document.getElementById("timer");
  let timeLeft = seconds;


    if (window.countdownInterval) {
        clearInterval(window.countdownInterval);
    }

    window.countdownInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(window.countdownInterval);
            timerElement.textContent = "🎉Event Started!🎉";
            timerElement.style.cssText = `
                  animation: fadeIn 2s ease-in-out infinite;
            `;
            return;
        }
        timerElement.textContent = timeLeft;
        timeLeft -= 1;
    }, 1000);
}