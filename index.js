const buttons = document.getElementsByClassName("button")
const SetRate = document.getElementById("Rate");
const SubmitBtn = document.querySelector("#SubmitBttn");
const RatingContainer = document.querySelector(".RatingContainer");
const ThankYouDisplay = document.getElementById("CardThankYou");


for (let i =0; i<buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let buttonsinnerhtml = this.innerHTML
        SetRate.innerText = buttonsinnerhtml;
    })
}


SubmitBtn.addEventListener("click", function(){
    RatingContainer.style.display = "none";
    ThankYouDisplay.style.display = "block"
})


