const ratings = document.getElementsByClassName("rating");
let rating_selected = 0;

for(const rating of ratings){
    rating.addEventListener("click", () => {
        
        if(rating_selected != 0){
            // If it was not a fresh rating
            // Revert the color of the previous rating to original color
            ratings[rating_selected-1].style.backgroundColor = "hsla(217, 12%, 63%, 0.075)";
            ratings[rating_selected-1].style.color = "hsl(217, 12%, 63%)";
        }        
        rating_selected = rating.innerHTML;
        rating.style.backgroundColor = "hsl(25, 97%, 53%)";
        rating.style.color = "white";
    })

    rating.addEventListener("mouseover", () => {
        if(rating.innerHTML != rating_selected){
            rating.style.backgroundColor = "hsl(217, 12%, 63%)";
            rating.style.color = "white";
        }
    })

    rating.addEventListener("mouseout", () => {
        if(rating.innerHTML != rating_selected) {
            rating.style.backgroundColor = "hsla(217, 12%, 63%, 0.075)";
            rating.style.color = "hsl(217, 12%, 63%)";
        }
    })
}

const submit_button = document.querySelector(".submit-button");
submit_button.addEventListener("click", () => {
    const content = document.querySelector(".content");
    const tq_content = document.querySelector(".tq-content");

    content.style.display = "none";
    tq_content.style.display = "block";
    
    const rating_value = document.getElementById("rating-value");
    rating_value.innerHTML = rating_selected;
})