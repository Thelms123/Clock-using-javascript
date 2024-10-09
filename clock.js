const body = document.querySelector("body");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const modeSwitch = document.querySelector(".mode-switch");

if(localStorage.getItem("mode") === "Dark Mode"){
    body.classList.add("dark");
    modeSwitch.textContent = "Light Mode";
}

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDarkMode = body.classList.contains("dark");
    modeSwitch.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
    localStorage.setItem("mode", isDarkMode ? "Dark Mode" : "Light Mode");
});

const updateTime = () => {
    let date = new Date();
    let secondToDeg = (date.getSeconds() / 60) * 360;
    let minuteToDeg = (date.getMinutes() / 60) * 360;
    let hourToDeg = ((date.getHours() % 12) / 12) * 360 + (date.getMinutes() / 60) * 30;
        secondHand.style.transform = `rotate(${secondToDeg}deg)`;
        minuteHand.style.transform = `rotate(${minuteToDeg}deg)`;
        hourHand.style.transform = `rotate(${hourToDeg}deg)`;
};

setInterval(updateTime, 1000);
updateTime();