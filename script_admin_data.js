//spis książek - data
const books = [
  { id: 1, title: 'Wyspa skarbów', author: 'Robert Louis Stevenson', description: 'Kilkunastoletni Jim Hawkins pracuje w tawernie portowej. Zaciąga się na statek, którego załoga płynie na tajemniczą wyspę gdzie, jak pokazuje stara mapa, znajduje się skarb legendarnego kapitana piratów Flinta. Wśród załogi statku znajdują się dawni towarzysze Flinta, którzy pragną odzyskać utracone łupy.', image: 'images/Adv1.jfif', available: true, borrowed: false, returned: false },
  { id: 2, title: 'The Magic of the Unicorn', author: 'Deborah Lerme Goodman', description: 'Magia jednorożca Deborah Lerme Goodman zabiera CIEBIE w fantastyczną przygodę w poszukiwaniu jednorożca w nadziei, że użyjesz jego rogu do oczyszczenia studni w twojej wiosce.', image: 'images/Adv2.jfif', available: true, borrowed: true, returned: false },
  { id: 3, title: 'Summer Adventure Stories', author: 'Blyton Enid', description: 'Wyrusz na przygodę na świeżym powietrzu z tą kolekcją 25 klasycznych opowieści autorstwa najbardziej lubianego gawędziarza na świecie. Idealna lektura na wakacje dla dzieci w wieku od 5 lat!', image: 'images/Adv3.jfif', available: true, borrowed: false, returned: false },
  { id: 4, title: 'Dragon Run', author: 'Patrick Matthews', description: 'Od zera do bohatera, ucieczka chłopa w dynamicznym świecie fantasy', image: 'images/Adv4.jfif', available: true, borrowed: false, returned: false},
  { id: 5, title: 'Ludojad', author: 'R. A. Montgomery', description: 'Czytelnik wciela się w rolę badacza wyprawy w Himalaje, gdzie poszukuje legendarnego Yeti, czyli potwora śnieżnego. Podczas eksploracji górskich szczytów i jaskiń czytelnik musi podejmować decyzje, rozwiązywać zagadki i unikać niebezpieczeństw.', image: 'images/Adv5.jfif', available: true, borrowed: false, returned: false },
  { id: 6, title: 'Kroniki Narnii', author: 'C.S. Lewis', description: 'Czwórka rodzeństwa odkrywa sekretny przejście do Narnii przez szafę w swoim domu. W Narnii spotykają różnorodne stworzenia, jak mówiące zwierzęta, centaury, krasnoludy i jednorożce.', image: 'images/Adv6.jfif', available: true, borrowed: false, returned: false },
  { id: 7, title: 'Wzlot i upadek Góry Majestic', author: 'Jennifer Trafton', description: 'Książka opowiada o Jocelyn, młodej dziewczynie o bujnej wyobraźni, która mieszka na wyspie zwanej Górą Majestic.', image: 'images/Adv7.jfif', available: true, borrowed: false, returned: false },
  { id: 8, title: 'Magiczna podwodna aktywność', author: 'Mia Underwood', description: 'Książka przenosi czytelników w magiczny świat podwodny, gdzie główna bohaterka, mała dziewczynka o imieniu Mia, odkrywa tajemniczą podwodną krainę pełną kolorowych stworzeń i magicznych miejsc.', image: 'images/Adv8.jfif', available: true, borrowed: false, returned: false },
  
 /* { id: 8, title: ' ', author: ' ', description: 'opis', image: 'images/Adv2.jfif', available: true }  */
];


const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const bookDetails = document.getElementById('bookDetails');

searchInput.addEventListener('input', searchBooks);

//wyszukiwanie
function searchBooks() {
  const searchText = searchInput.value.toLowerCase();
  const filteredBooks = books.filter(book => {
    const title = book.title.toLowerCase();
    const author = book.author.toLowerCase();
    return title.includes(searchText) || author.includes(searchText);
  });

  displayResults(filteredBooks);
}

function displayResults(books) {
  searchResults.innerHTML = '';

  if (books.length === 0) {
    searchResults.innerHTML = '<p>Nie znaleziono.</p>';
  } else {
    books.forEach(book => {
      const bookElement = document.createElement('div');
      bookElement.innerHTML = `<strong>ID:</strong> ${book.id}<br><strong>Tytuł:</strong> ${book.title}<br><strong>Autor:</strong> ${book.author}`;
      bookElement.addEventListener('click', () => showBookDetails(book));
      searchResults.appendChild(bookElement);
    });
  }
}

//detale książek
function showBookDetails(book) {
  bookDetails.innerHTML = `
	<p><strong>ID:</strong> ${book.id}</p>
    <h2>${book.title}</h2>
    <p><strong>Autor:</strong> ${book.author}</p>
    <p><strong>Opis:</strong> ${book.description}</p>
	 <img src="${book.image}" alt="Book Cover" />
  `;
  bookDetails.classList.remove('hidden');
}

//skrypt dodawania
function addBook(book) {
  const newBookId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
  book.id = newBookId;
  books.push(book);
  alert(`Książka "${book.title}" została pomyślnie dodana`);
}

//skrypt edytowania
function editBook(book) {
  const bookIndex = books.findIndex(b => b.id === book.id);

  if (bookIndex !== -1) {
    books[bookIndex] = book;
    alert(`Książka "${book.title}" została pomyślnie zeedytowana`);
  } else {
    alert('Nie odnaleziono książki');
  }
}

//skrypt usuwania
function deleteBook(bookId) {
  const bookIndex = books.findIndex(b => b.id === bookId);

  if (bookIndex !== -1) {
    const bookTitle = books[bookIndex].title;
    books.splice(bookIndex, 1);
    alert(`Książka "${bookTitle}" została pomyślnie usunięta`);
  } else {
    alert('Nie odnaleziono książki');
  }
}

//przyciski na dodawanie itd
 const bookManagementOptions = document.createElement('div');
  bookManagementOptions.innerHTML = `
    <h3>Zarządzanie książkami</h3>
    <button onclick="showAddBookForm()">Dodaj książkę</button>
    <button onclick="showEditBookForm()">Zedytuj ksiązkę</button>
    <button onclick="showDeleteBookForm()">Usuń książkę</button>
  `;
  document.body.appendChild(bookManagementOptions);

//panel dodawania
function showAddBookForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h3>Dodaj książkę</h3>
    <label>Tytuł:</label>
    <input type="text" id="add-book-title" required>
    <label>Autor:</label>
    <input type="text" id="add-book-author" required>
    <label>Opis:</label>
    <textarea id="add-book-description" required></textarea>
    <button type="submit">Add</button>
  `;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const titleInput = document.getElementById('add-book-title');
    const authorInput = document.getElementById('add-book-author');
    const descriptionInput = document.getElementById('add-book-description');
    const newBook = {
      title: titleInput.value,
      author: authorInput.value,
      description: descriptionInput.value,
      available: true,
      borrowed: false,
      reserved: false
    };
    addBook(newBook);
    form.reset();
  });
  document.body.appendChild(form);
}

//panel edytowania
function showEditBookForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h3>Zedytuj książkę</h3>
    <label>ID książi:</label>
    <input type="number" id="edit-book-id" required>
    <label>Tytuł:</label>
    <input type="text" id="edit-book-title" required>
    <label>Autor:</label>
    <input type="text" id="edit-book-author" required>
    <label>Opis:</label>
    <textarea id="edit-book-description" required></textarea>
    <button type="submit">Edit</button>
  `;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const idInput = document.getElementById('edit-book-id');
    const titleInput = document.getElementById('edit-book-title');
    const authorInput = document.getElementById('edit-book-author');
    const descriptionInput = document.getElementById('edit-book-description');
    const bookId = parseInt(idInput.value);
    const updatedBook = {
      id: bookId,
      title: titleInput.value,
      author: authorInput.value,
      description: descriptionInput.value,
      available: true,
      borrowed: false,
      reserved: false
    };
    editBook(updatedBook);
    form.reset();
  });
  document.body.appendChild(form);
}

//panel usuwania
function showDeleteBookForm() {
  const form = document.createElement('form');
  form.innerHTML = `
    <h3>Usuń książkę</h3>
    <label>ID książki:</label>
    <input type="number" id="delete-book-id" required>
    <button type="submit">Delete</button>
  `;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const idInput = document.getElementById('delete-book-id');
    const bookId = parseInt(idInput.value);
    deleteBook(bookId);
    form.reset();
  });
  document.body.appendChild(form);
}


//kod css
  bookDetails.style.padding = '20px';
  bookDetails.style.borderRadius = '5px';
  
  