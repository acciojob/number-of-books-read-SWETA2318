const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Initialize a counter for the number of books read
  let booksReadCount = 0;

  // Loop through each book in the library
  for (let i = 0; i < library.length; i++) {
    // Check if the current book has been read (readingStatus is true)
    if (library[i].readingStatus === true) {
      // Increment the counter if the book has been read
      booksReadCount++;
    }
  }

  // Return the final count of books read
  return booksReadCount;
};

// Do not change the code below

alert(numberOfBooksRead());
