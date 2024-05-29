// Select relevant HTML elements
const filterSelect = document.querySelector("#filter-select");
const filterableCards = document.querySelectorAll("#filterable-cards .card");

// Function to filter cards based on filter selection
const filterCards = (e) => {
    const filterValue = e.target.value;

    filterableCards.forEach(card => {
        if(card.dataset.name === filterValue || filterValue === "all") {
            return card.classList.replace("hide", "show");
        }
        card.classList.add("hide");
    });
}

// Add event listener to the select element
filterSelect.addEventListener("change", filterCards);