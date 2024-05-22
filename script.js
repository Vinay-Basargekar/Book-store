// Fetch the list of books from the server
fetch("http://localhost:3000/books")
	.then((response) => response.json())
	.then((data) => {
		const selectElement = document.getElementById("bookName");
		data.forEach((book) => {
			const option = document.createElement("option");
			option.value = book.title;
			option.textContent = book.title;
			option.setAttribute("data-author", book.author); // Set author as data attribute
			option.setAttribute("data-pages", book.noOfPages); // Set no. of pages as data attribute
			selectElement.appendChild(option);
		});

		// Update the event listener for the select element
		selectElement.addEventListener("change", function () {
			const selectedBook = this.options[this.selectedIndex];
			const author = selectedBook.getAttribute("data-author");
			const pages = selectedBook.getAttribute("data-pages");

			document.querySelector("#author").value = author || ""; // Fill author name
			document.querySelector("#pages").value = pages || ""; // Fill dummy no. of pages
		});
	});

// Add event listener to "Add to cart" buttons to remove the card
document.querySelectorAll(".caption button").forEach((button) => {
	button.addEventListener("click", function () {
		removeCard(this);
	});
});

const btn = document.querySelector("#add-button");
const btnSelect = document.querySelector(".black-button");
const card = document.querySelector(".card");
const cardContainer = document.querySelector(".card-container");

const openPopupButton = document.getElementById("openPopupButton");
const cardPopup = document.getElementById("cardPopup");

openPopupButton.addEventListener("click", () => {
	cardPopup.style.display = "block";
	overlay.style.display = "block";
});

function closePopup() {
	cardPopup.style.display = "none";
	overlay.style.display = "none";
}

function removeCard(button) {
	const cardToRemove = button.closest(".card");
	cardToRemove.parentNode.removeChild(cardToRemove);
}

document.getElementById("add-button").addEventListener("click", function () {
	// Add your logic to handle the form submission here
	// For example, you can collect the form data and add it to the cart
	// Then close the popup
	closePopup();
});
