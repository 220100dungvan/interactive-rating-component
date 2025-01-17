const ratingItems = document.querySelectorAll('.rating-item');
ratingItems.forEach((item) => {
    item.addEventListener('click', () => {
        ratingItems.forEach((el) => {
            el.classList.remove('active');
        });
        item.classList.add('active');
    });
});


const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener('click', () => {
    const active_rating_item = document.querySelector(".rating-item.active");
    if (active_rating_item) {
        const ratingState = document.querySelector(".rating-state");
        const thankyouState = document.querySelector(".thankyou-state");
        const yourChoice = document.querySelector(".your-choice");
        const total = document.querySelector(".thankyou-state .total");

        total.textContent = ratingItems.length;
        yourChoice.textContent = active_rating_item.textContent;
        ratingState.style.opacity = 0;
        thankyouState.style.opacity = 1;
    } else {
        console.log("no")
    }
});