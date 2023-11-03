const number1 = document.querySelector("#counter > div > span:first-of-type");
const number2 = document.querySelector("#counter > div > span:nth-of-type(2)");
const number3 = document.querySelector("#counter > div > span:nth-of-type(3)");
const number4 = document.querySelector("#counter > div > span:nth-of-type(4)");
const number5 = document.querySelector("#counter > div > span:last-of-type");

// number1?.addEventListener("animationend", () => {
//     number1.style.animation = "none";
// });

// const inter = setInterval(() => {
//     function addAnimation() {
//         number1.style.animation = "rotate 2s linear";
//         setTimeout(() => {
//             number1.innerHTML = Number(number1.innerHTML) + 1;
//         }, 500);
//     }
//     clearInterval(inter);
//     setInterval(addAnimation, 2000);
// }, 2000);

// function changement() {
//     let interval = Math.round(Math.random() * 5000);

// }
// changement()






const lngButton = document.querySelectorAll(".lng-button");

lngButton.forEach((button, index) => {
    button.addEventListener("click", () => {
        button.style.fontWeight = "700";
        Array.from(lngButton).filter((button, i) => i !== index)[0].style.fontWeight = "400";
    });
}
);

