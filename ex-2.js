const books = [
  { title: "A Tale of Two Cities", author: "Charles Dickens" },
  { title: "Brave New World", author: "Aldous Huxley" },
  { title: "Catch-22", author: "Joseph Heller" },
  { title: "Don Quixote", author: "Miguel de Cervantes" },
  { title: "Ender's Game", author: "Orson Scott Card" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "Gone with the Wind", author: "Margaret Mitchell" },
  { title: "Harry Potter", author: "J.K. Rowling" },
];

function findBookIndex(books, searchTitle) {
  let left = 0;
  let right = books.length;
  let index = -1;

  for (let i = 0; i < books.length; i++) {
    let mid = Math.floor(left + right / 2);
    if (books[i].title === searchTitle) {
      index = i;
    } else if (books[i].title < searchTitle) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return index;
}

const result = findBookIndex(books, "Gone with the Wind");
const result2 = findBookIndex(books, "Brave New World");
const result3 = findBookIndex(books, "Dragon ball z");

console.log(result);
console.log(result2);
console.log(result3);
