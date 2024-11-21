const bookList = document.querySelector("#book-list");
const container = document.querySelector("#container");
const searchForm = document.querySelector("#search");
const input = document.querySelector("#input");
const nextButton = document.querySelector("#next-button");

const apiEndpoint = "http://gutendex.com/books";

// HTTP Requests. What are they?

// GET, POST, PUT, DELETE

// Function that fetches our data from the API endpoint.
async function getBooks(url) {
  // try/catch block for error handling.
  try {
    const result = await fetch(url);
    if (!result.ok) {
      throw new Error(`HTTP Error! Status code: ${result.status}`);
    }
    const data = await result.json();
    if (!data.count) {
      showBook(data);
    } else {
      populateBookList(data);
    }
  } catch (error) {
    throw new Error(`Error fetching books: ${error.status}`);
  }
}
getBooks(apiEndpoint);

// Function to populate the book list
function populateBookList(data) {
  while (bookList.firstChild) {
    bookList.firstChild.remove();
  }
  data.results.forEach((book) => {
    const bookTitle = document.createElement("li");
    bookTitle.textContent = book.title;
    bookList.append(bookTitle);
    bookTitle.addEventListener("click", () => {
      getBooks(`${apiEndpoint}/${book.id}`);
    });
  });
}

// Function to display book data for a single book
function showBook(data) {
  const bookModal = document.createElement("dialog");
  bookModal.classList.add("modal");
  const bookTitle = document.createElement("h2");
  bookTitle.textContent = data.title;
  const bookAuthor = document.createElement("p");
  bookAuthor.textContent = data.authors[0].name;
  const bookSubjects = document.createElement("p");
  bookSubjects.textContent = data.subjects[0];

  //appending!
  bookModal.append(bookTitle, bookAuthor, bookSubjects);
  document.body.append(bookModal);
  bookModal.showModal();
  document.body.addEventListener("click", closeModal);
  function closeModal() {
    document.body.removeEventListener("click", closeModal);
    bookModal.close();
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log(input.value);
  const searchTerm = input.value;
  //   console.log(`${apiEndpoint}?search=${searchTerm.replaceAll(" ", "%20")}`);
  getBooks(`${apiEndpoint}?search=${searchTerm.replaceAll(" ", "%20")}`);
});
