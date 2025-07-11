const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" },
  { title: "The Alchemist", author: "Paulo Coelho" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Pride and Prejudice", author: "Jane Austen" }
];

const container = document.getElementById('book-container');

books.forEach(book => {
  const card = document.createElement('div');
  card.className = 'book';
  card.innerHTML = `
    <h3>${book.title}</h3>
    <p>by ${book.author}</p>
    <button onclick="alert('You selected: ${book.title}')">View Details</button>
  `;
  container.appendChild(card);
});
