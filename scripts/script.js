const form = document.querySelector(".form");
const confirmation = document.querySelector(".confirm");
const rateContainer = document.querySelector(".confirm__rating");
const errorMessage = document.querySelector("#form-error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const selectedRating = document.querySelector(".form__rate-input:checked");
    if (selectedRating) {
        showConfirmation(selectedRating.value);
    } else {
        // Shows error message when nothing is selected
        showError();
    }

});

function showError() {
    errorMessage.classList.remove("hidden");
}

function hideRatingForm() {
    form.classList.add("hidden");
    form.setAttribute("aria-hidden", true);
}

function showConfirmation(rating) {

    hideRatingForm();

    // Shows the confirmation page with the selected rating.
    rateContainer.textContent = rating;
    confirmation.classList.remove("hidden");
    confirmation.removeAttribute("aria-hidden");

}