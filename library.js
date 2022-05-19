const initialBooks = [
  {
    title: 'Nineteen Eighty-Four',
    author: 'George Orwell',
    length: 328,
    read: true,
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    length: 432,
    read: true,
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    length: 281,
    read: false,
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    length: 208,
    read: false,
  },
  {
    title: 'One Hundred Years of Solitude',
    author: 'Gabriel García Márquez',
    length: '448',
    read: false,
  },
  {
    title: 'In Cold Blood',
    author: 'Truman Capote',
    length: '343',
    read: false,
  },
  {
    title: 'Wide Sargasso Sea',
    author: 'Jean Rhys',
    length: '176',
    read: false,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    length: '311',
    read: true,
  },
  {
    title: 'I Capture The Castle',
    author: 'Dodie Smith',
    length: '408',
    read: false,
  },
  {
    title: 'Jane Eyre',
    author: 'Charlotte Bronte',
    length: '592',
    read: false,
  },
  {
    title: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    length: '448',
    read: false,
  },
  {
    title: 'The Call of the Wild',
    author: 'Jack London',
    length: '232',
    read: true,
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    length: '427',
    read: true,
  },
  {
    title: 'The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    length: '208',
    read: true,
  },
  {
    title: 'The Death of the Heart',
    author: 'Elizabeth Bowen',
    length: '418',
    read: false,
  },
  {
    title: 'The Master and Margarita',
    author: 'Mikhail Bulgakov',
    length: '432',
    read: false,
  },
  {
    title: 'One Flew Over the Cuckoo\'s Nest',
    author: 'Ken Kesey',
    length: '320',
    read: false,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J. R. R. Tolkien ',
    length: '1178',
    read: true,
  },
];

function runInitialList() {
  initialBooks.forEach(book => myLibrary.push(book));
  printListOfBooks();
}

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.length = pages;
  this.read = read;
}

const submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
  addBookToLibrary();
});

function addBookToLibrary() {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const length = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;

  const newBook = new Book(title, author, length, read);

  myLibrary.push(newBook);
  document.querySelector('form').reset();

  printListOfBooks();
}

function printListOfBooks() {
  const tbody = document.querySelector('#listOfBooks');
  const averageRead = document.querySelector('.averageRead');
  let totalRead = 0;
  tbody.innerHTML = '';
  myLibrary.forEach(book => {
    // increment if read
    if (book.read === true) totalRead++;
    // insert a new row at the top of tbody
    const row = tbody.insertRow(0);
    const index = myLibrary.indexOf(book).toString();
    row.setAttribute('index', index);
    // insert cells
    const title = row.insertCell(0);
    const author = row.insertCell(1);
    const pages = row.insertCell(2);
    const read = row.insertCell(3);
    const edit = row.insertCell(4);
    // set classes for title and author
    title.className = 'left';
    author.className = 'left';
    // insert data into cell
    title.innerHTML = book.title;
    author.innerHTML = book.author;
    pages.innerHTML = book.length;
    const readStatus = book.read === true ? 'READ' : 'UNREAD';
    read.innerHTML = `<input type="button" onclick=toggleStatusOf(${ index }) value="${ readStatus }">`;
    edit.innerHTML = `<input type="button" onclick=deleteRowAt(${ index }) value="DELETE">`;
  });
  averageRead.innerHTML = `${totalRead}/${myLibrary.length}`;
}

function deleteRowAt(index) {
  console.log(index);
  myLibrary = myLibrary.filter(book => myLibrary.indexOf(book) !== index);
  printListOfBooks();
}

function toggleStatusOf(item) {
  console.log(item);
  const status = myLibrary.find(book => myLibrary.indexOf(book) === item);
  console.log(status);
  if (status.read === true) {
    status.read = false;
  } else {
    status.read = true;
  }
  printListOfBooks();
}
