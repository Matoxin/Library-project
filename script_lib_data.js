//spis książek - data

const books = [
  { id: 1, title: 'Wyspa skarbów', author: 'Robert Louis Stevenson', description: 'Kilkunastoletni Jim Hawkins pracuje w tawernie portowej. Zaciąga się na statek, którego załoga płynie na tajemniczą wyspę gdzie, jak pokazuje stara mapa, znajduje się skarb legendarnego kapitana piratów Flinta. Wśród załogi statku znajdują się dawni towarzysze Flinta, którzy pragną odzyskać utracone łupy.', image: 'images/Adv1.jfif', borrowed: false, returned: false  },
  { id: 2, title: 'The Magic of the Unicorn', author: 'Deborah Lerme Goodman', description: 'Magia jednorożca Deborah Lerme Goodman zabiera CIEBIE w fantastyczną przygodę w poszukiwaniu jednorożca w nadziei, że użyjesz jego rogu do oczyszczenia studni w twojej wiosce.', image: 'images/Adv2.jfif', borrowed: true, returned: false},
  { id: 3, title: 'Summer Adventure Stories', author: 'Blyton Enid', description: 'Wyrusz na przygodę na świeżym powietrzu z tą kolekcją 25 klasycznych opowieści autorstwa najbardziej lubianego gawędziarza na świecie. Idealna lektura na wakacje dla dzieci w wieku od 5 lat!', image: 'images/Adv3.jfif', borrowed: false, returned: false },
  { id: 4, title: 'Dragon Run', author: 'Patrick Matthews', description: 'Od zera do bohatera, ucieczka chłopa w dynamicznym świecie fantasy', image: 'images/Adv4.jfif', borrowed: false, returned: false},
  { id: 5, title: 'Ludojad', author: 'R. A. Montgomery', description: 'Czytelnik wciela się w rolę badacza wyprawy w Himalaje, gdzie poszukuje legendarnego Yeti, czyli potwora śnieżnego. Podczas eksploracji górskich szczytów i jaskiń czytelnik musi podejmować decyzje, rozwiązywać zagadki i unikać niebezpieczeństw.', image: 'images/Adv5.jfif', borrowed: false, returned: false },
  { id: 6, title: 'Kroniki Narnii', author: 'C.S. Lewis', description: 'Czwórka rodzeństwa odkrywa sekretny przejście do Narnii przez szafę w swoim domu. W Narnii spotykają różnorodne stworzenia, jak mówiące zwierzęta, centaury, krasnoludy i jednorożce.', image: 'images/Adv6.jfif', borrowed: false, returned: false },
  { id: 7, title: 'Wzlot i upadek Góry Majestic', author: 'Jennifer Trafton', description: 'Książka opowiada o Jocelyn, młodej dziewczynie o bujnej wyobraźni, która mieszka na wyspie zwanej Górą Majestic.', image: 'images/Adv7.jfif', borrowed: false, returned: false},
  { id: 8, title: 'Magiczna podwodna aktywność', author: 'Mia Underwood', description: 'Książka przenosi czytelników w magiczny świat podwodny, gdzie główna bohaterka, mała dziewczynka o imieniu Mia, odkrywa tajemniczą podwodną krainę pełną kolorowych stworzeń i magicznych miejsc.', image: 'images/Adv8.jfif', borrowed: false, returned: false },
  
 /* { id: 9, title: ' ', author: ' ', description: 'opis', image: 'images/Adv2.jfif', available: true }  */
];

//wyszukiwanie
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
const bookDetails = document.getElementById('bookDetails');

searchInput.addEventListener('input', searchBooks);

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

//książki szczegóły
function showBookDetails(book) {
  bookDetails.innerHTML = `
	<p><strong>ID:</strong> ${book.id}</p>
    <h2>${book.title}</h2>
    <p><strong>Autor:</strong> ${book.author}</p>
    <p><strong>Opis:</strong> ${book.description}</p>
	 <img src="${book.image}" alt="Book Cover" />
  `;


  if (!book.borrowed && !book.reserved) {
    const borrowButton = document.createElement('button');
    borrowButton.textContent = 'Wypożycz książkę';
    borrowButton.addEventListener('click', () => borrowBook(book));
    bookDetails.appendChild(borrowButton);
  }

  if (book.borrowed) {
    const returnButton = document.createElement('button');
    returnButton.textContent = 'Zwróć książkę';
    returnButton.addEventListener('click', () => returnBook(book));
    bookDetails.appendChild(returnButton);
  }

  bookDetails.classList.remove('hidden');
}

//wypożyczanie książki
function borrowBook(book) {
  book.borrowed = true;
  alert(`Udało Ci się zaznaczyć ${book.title} jako wypożyczoną`);
  showBookDetails(book);
}

//zwrot książki
function returnBook(book) {
  book.returned = true;
  book.borrowed = false;
  alert(`Udało Ci się zaznaczyć ${book.title} jako zwrócona`);
  showBookDetails(book);
}
  
//kod css
  bookDetails.style.padding = '20px';
  bookDetails.style.borderRadius = '5px';
  
  
  