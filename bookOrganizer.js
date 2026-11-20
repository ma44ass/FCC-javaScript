const books = [
  {
    title: "Dune",
    authorName: "Frank Herbert",
    releaseYear: 1965,
  },
  {
    title: "The Left Hand of Darkness",
    authorName: "Ursula K. Le Guin",
    releaseYear: 1969,
  },
  {
    title: "Project Hail Mary",
    authorName: "Andy Weir",
    releaseYear: 2021,
  },
];

function sortByYear(bookA, bookB) {
  if (bookA.releaseYear < bookB.releaseYear) {
    return -1;
  }

  if (bookA.releaseYear > bookB.releaseYear) {
    return 1;
  }

  return 0;
}

const max_release_year = 1965;

/**Filtering  and sorting books released  on or before  a year **/

const filteredBooks = books.filter(
  (book) => book.releaseYear <= max_release_year,
);

filteredBooks.sort(sortByYear);
