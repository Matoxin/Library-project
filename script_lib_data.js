const books = [
  { id: 1, title: 'Wiedźmin. Tom 1. Ostatnie życzenie', author: 'Andrzej Sapkowski', description: 'Główny bohater, Geralt z Rivii, jest wiedźminem, czyli osobą, która w zamian za wynagrodzenie, pozbywa się rozlicznych potworów. Działa według ściśle określonego systemu moralnego, dzieląc wszystko na to, co dobre i na to, co złe, nie uznając natomiast niczego pośrodku. Nie zabija, jeśli nie musi tego robić. Woli stawiać na uroki, które czasem też mogą rozwiązać problem. W trakcie swoich przygód poznaje piękną czarodziejkę, Yennefer, która wzbudza w nim fascynację. Jakie zlecenia czekają na niego w najbliższej przyszłości?', image: 'images/wiedzmin1.jpg', borrowed: false, returned: false },
  { id: 2, title: 'Wiedźmin. Tom 2. Miecz przeznaczenia', author: 'Andrzej Sapkowski', description: 'Wiedźmiński kodeks stawia tę sprawę w sposób jednoznaczny: wiedźminowi smoka zabijać się nie godzi. To gatunek zagrożony wymarciem. Aczkolwiek w powszechnej opinii to gad najbardziej wredny. Na oszluzgi, widłogony i latawce kodeks polować przyzwala. Ale na smoki – nie. Wiedźmin Geralt przyłącza się jednak do zorganizowanej przez króla Niedamira wyprawy na smoka, który skrył się w jaskiniach Gór Pustulskich. Na swej drodze spotyka trubadura Jaskra oraz – jakżeby inaczej – czarodziejkę Yennefer. Wśród zaproszonych przez króla co sławniejszych smokobójców jest Eyck z Denesle, rycerz bez skazy i zmazy, Rębacze z Cinfrid i szóstka krasnoludów pod komendą Yarpena Zigrina. Motywacje są różne, ale cel jeden. Smok nie ma szans.', image: 'images/wiedzmin2.jpg', borrowed: false, returned: false },
  { id: 3, title: 'Wiedźmin. Tom 3. Krew elfów', author: 'Andrzej Sapkowski', description: '"Krew elfów" opowiada o losach Geralta - wiedźmina, który opiekuje się dzieckiem-niespodzianką. Tym dzieckiem jest dziewczynka o imieniu Ciri. W prezentowanym tomie poznajemy też czarodziejkę Triss, która również ma wpływ na wychowanie dziecka. Autor powoli wprowadza czytelnika w nowy świat, kreuje i daje poznać otaczającą bohaterów rzeczywistość. Fabuła książki rozgrywa się w świecie określanym przez samego autora jako quasi-średniowiecze. Mamy więc tu nie tylko zwykłych ludzi, ale też mutantów, krasnoludów i elfów.', image: 'images/wiedzmin3.jpg', borrowed: false, returned: false  },
  { id: 4, title: 'Wiedźmin. Tom 4. Czas pogardy', author: 'Andrzej Sapkowski', description: '"Czas pogardy" to czwarty tom sagi o Wiedźminie Geralcie. Nadchodzi zapowiadany wcześniej przez Intlinne czas miecza i topora. W tej części świat Ciri i Wiedźmina ogarniają płomienie. Na powierzchnię zaczynają wyłazić złowieszcze szczury, uwielbiające czynić zło. Rozpoczynają atakować w sposób zdradziecki i okrutny. Ludzie powoli tracą wszystko, co mieli. W konsekwencji - dla otaczającego ich świata i obcych osób mają już tylko tytułową pogardę. To także tom, w którym Geralt po raz pierwszy zaczyna wchodzić w świat polityki.', image: 'images/wiedzmin4.jpg', borrowed: false, returned: false  },
  { id: 5, title: 'Wiedźmin. Tom 5. Chrzest ognia', author: 'Andrzej Sapkowski', description: '"Wiedźmin. Tom 5. Chrzest ognia" to kontynuacja losów tytułowego zabójcy wampirów, kikimor i innych stworzeń czyhających na ludzkie życia. W tej części Geralt z Rivii wraz z Jaskrem nadal podąża tropem Ciri - magicznie uzdolnionej dziewczynki, z którą związany jest przeznaczeniem. Opuszcza zamieszkany przez driady las Brokilon i tworzy nietypową grupę z osób skorych do udzielenia mu pomocy. Trafiają do niej łuczniczka Milva, zdrajca Cahir oraz tajemniczy cyrulik Regis. Tymczasem Nilfgard zrywa rozejm z Temerią. Maszerujące wojska skutecznie utrudniają wędrówkę wiedźmina, który wraz z towarzyszami zmuszony zostaje do zmiany trasy. Wojna ma także inne, daleko idące konsekwencje. Może doprowadzić do sojuszu czarodziejek, które nie zamierzają biernie przyglądać się wszystkim wydarzeniom. Wśród nich znajdzie się Yennefer z Vengerbergu - ukochana Geralta oraz przyszywana matka Ciri. Nastał trudny czas dla Geralta z Rivii, który być może po raz kolejny będzie musiał zapomnieć o swojej neutralności i opowiedzieć się po jednej ze stron.', image: 'images/wiedzmin5.jpg', borrowed: false, returned: false  },
  { id: 6, title: 'Wiedźmin. Tom 6. Wieża jaskółki', author: 'Andrzej Sapkowski', description: 'Klęska jest nieunikniona. Świadczy o tym niemal wszystko i każda bardziej spostrzegawcza istota dostrzeże to bez problemu. Przyczyną wydaje się jesienne Ekwinokcjum. Wszystko staje się coraz dziwniejsze i bardziej przerażające. Nadciąga niespodziewana zawierucha, a Leiki śpiewają konajączkę. Ten sam sen nawiedza jednocześnie trzy różne osoby na terenie świątyni Melitele. Tymczasem Ciri powoli dochodzi do siebie po niedawno odniesionych obrażeniach. Przebywa w chacie pustelnika Vysygoty. Na szczęście jej zdrowiu już nic nie zagraża. Kiedy przybrana córka Geralta dochodzi do wcześniejszej sprawności, postanawia przybliżyć gospodarzowi szczegóły swej podróży, łącznie z tym, w jaki sposób trafiła do miejsca, w którym obecnie się znajduje. Ciri nawet nie zdaje sobie sprawy z tego, że Geralt wciąż przetrząsa okolicę, by ją odnaleźć. Nie jest ON jednak jedyną osobą, która jej szuka. Na "łowy" wyrusza także cesarz Emhyr var Emreis, pragnie ON ją poślubić i zbliżyć się do tronu Cintry.', image: 'images/wiedzmin6.jpg', borrowed: false, returned: false },
  { id: 7, title: 'Wiedźmin. Tom 7. Pani Jeziora', author: 'Andrzej Sapkowski', description: '"Pani Jeziora" to siódmy już tom sagi o Wiedźminie. Sapkowski przenosi nas do królestwa Aen Elle, do którego dostaje się jedna z głównych bohaterek - Ciri. Gdy jednak dowiaduje się, co czeka na nią w królestwie oraz czego oczekuje od niej Król Olch, dziewczyna postanawia uciec. W bezpiecznym opuszczeniu tego miejsca pomagają jej... jednorożce. W tym samym czasie śledzimy także losy głównego bohatera całej sagi - Wiedźmina Geralta, który zmuszony jest opuścić Caed Myrkvid. W końcu drogi Ciri i Geralta przecinają się, a akcja z każdą kolejną stroną nabiera tempa. Niewątpliwie Pani Jeziora to ponownie barwna, naszpikowana detalami historia, w której odnajdą się tylko ci, którzy pokuszą się o otwarcie pierwszej strony kolejnego tomu wiedźmińskiej sagi.', image: 'images/wiedzmin7.jpg', borrowed: false, returned: false  },
  { id: 8, title: 'Wiedźmin. Tom 8. Sezon burz. ', author: 'Andrzej Sapkowski', description: '"Sezon burz" to kolejna część przygód Geralta z Rivii. Choć słowo "kolejna" może tu być mylące, bo nie jest ona kontynuacją sagi. Wydarzenia w niej opisane są chronologicznie wcześniejsze, niż te z poprzednich tomów cyklu o Wiedźminie. "Sezon burz" jest właściwie oddzielną opowieścią, opartą na uniwersum wykreowanym przez Andrzeja Sapkowskiego, spotykamy w nim jednakże postaci z innych tomów sagi, jak na przykład barda i poetę Jaskra czy czarodziejkę, ukochaną Wiedźmina, Yennefer. Nietypowo dla Andrzeja Sapkowskiego, akcja powieści toczy się z początku jednowątkowo, jednak z czasem wydarzenia się zagęszczają. Geralt zostaje wysłany na misję do Rissbergu. Po stoczeniu morderczej walki z drapieżnikiem Arachnomorfem i zabiciu bestii, udaje się do miasta Kerack, chcąc się najeść do syta i odpocząć. By wejść do grodu, musi zdeponować swoje miecze w kordegardzie. Następnie wdaje się w bójkę ze strażniczkami miasta Kerack i zostaje aresztowany. Dzięki tajemniczemu darczyńcy czeka, co prawda na wyrok na wolności, jednakże okazuje się, że ktoś ukradł jego miecze. Na domiar złego kochliwy Wiedźmin wdaje się w romans z rudowłosą czarodziejką Koral, która oczywiście wykorzystuje go do własnych celów.', image: 'images/wiedzmin8.jpg', borrowed: false, returned: false  },
  { id: 9, title: 'Harry Potter i Kamień Filozoficzny. Tom 1', author: 'Joanne Kathleen Rowling', description: 'Pochodzenie chłopca owiane jest tajemnicą; jedyną pamiątką Harry`ego z przeszłości jest zagadkowa blizna na czole. Skąd jednak biorą się niesamowite zjawiska, które towarzyszą nieświadomemu niczego Potterowi? Wszystko zmienia się w dniu jedenastych urodzin chłopca, kiedy dowiaduje się o istnieniu świata, o którym nie miał dotąd pojęcia.', image: 'images/harry1.jpg', borrowed: false, returned: false },
  { id: 10, title: 'Harry Potter i Komnata Tajemnic. Tom 2', author: 'Joanne Kathleen Rowling', description: 'Harry po pełnym przygód roku w Hogwarcie spędza nudne wakacje u Dursleyów i z utęsknieniem wyczekuje powrotu do szkoły. Sprawy jednak znacznie się komplikują, gdy pewnego dnia odwiedza go tajemniczy przybysz i ostrzega przed… powrotem do Szkoły Magii i Czarodziejstwa, gdzie ma dojść do strasznych wydarzeń. Czy Harry posłucha ostrzeżenia? Co złego ma się wydarzyć w Hogwarcie? Jakie tajemnice skrywa rodzina Malforya? I najważniejsze – czym jest i gdzie znajduje się tytułowa Komnata Tajemnic?', image: 'images/harry2.jpg', borrowed: false, returned: false, },
  { id: 11, title: 'Harry Potter i Więzień Azkabanu. Tom 3', author: 'Joanne Kathleen Rowling', description: 'Z pilnie strzeżonego więzienia dla czarodziejów ucieka niebezpieczny przestępca. Kim jest? Co go łączy z Harrym? Dlaczego lekcje przepowiadania przyszłości stają się dla bohatera udręką? W trzecim tomie przygód Harry′ego Pottera poznajemy nowego nauczyciela obrony przed czarną magią, oglądamy Hagrida w nowej roli oraz dowiadujemy się więcej o przeszłości profesora Snape′a. Wyprawiamy się również wraz z trzecioklasistami do obfitującego w atrakcje Hogsmeade, jedynej wioski w Anglii zamieszkanej wyłącznie przez czarodziejów.', image: 'images/harry3.jpg', borrowed: false, returned: false },
  { id: 12, title: 'Harry Potter i Czara Ognia. Tom 4', author: 'Joanne Kathleen Rowling', description: 'W tym roku w Szkole Magii i Czarodziejstwa Hogwart rozegra się Turniej Trójmagiczny, na który przybędą uczniowie z Bułgarii i Francjii. Zgodnie z prastarymi regułami w turnieju uczestniczyć ma trzech uczniów - reprezentantów każdej ze szkół, wybranych przez Czarę Ognia. W tajemniczych i niewyjaśnionych okolicznościach wybranych zostaje czterech. Co z tego wyniknie dla Harryego, jego przyjaciół i całego świata czarodziejów, dowiecie się z lektury czwartego tomu przygód nastoletniego czarodzieja.', image: 'images/harry4.jpg', borrowed: false, returned: false },
  { id: 13, title: 'Harry Potter i Zakon Feniksa. Tom 5', author: 'Joanne Kathleen Rowling', description: 'Harry znów spędza nudne, samotne wakacje w domu Dursleyów. Czeka go piąty rok nauki w Hogwarcie i chciałby jak najszybciej spotkać się ze swoimi najlepszymi przyjaciółmi, Ronem i Hermioną. Ci jednak wyraźnie go zaniedbują. Gdy Harry ma już dość wszystkiego i postanawia zmienić swoją nieznośną sytuację, sprawy przyjmują całkiem nieoczekiwany obrót. Wygląda na to, że nowy rok nauki w Hogwarcie będzie bardzo dramatyczny. Po raz pierwszy w życiu Harry poczuje się tam nie jak w domu, tylko... więzieniu, i to nie za sprawą przywróconego do życia Lorda Voldemorta.', image: 'images/harry5.jpg', borrowed: false, returned: false },
  { id: 14, title: 'Harry Potter i Książę Półkrwi. Tom 6', author: 'Joanne Kathleen Rowling', description: 'Po nieudanej próbie przechwycenia przepowiedni Lord Voldemort jest gotów uczynić wszystko, by zawładnąć światem czarodziejów. Organizuje tajemny zamach na swego przeciwnika, a narzędziem w jego ręku staje się jeden z uczniów. Czy jego plan się powiedzie? Szósta część przygód Harry’ego Pottera przynosi cenne informacje o matce Voldemorta, jego dzieciństwie oraz początkach kariery młodego Toma Riddle`a, które rzucą nowe światło na sylwetkę głównego antagonisty Pottera. Na czym polega sekret nadprzyrodzonej mocy Czarnego Pana? Jaki jest cel tajemniczych i niebezpiecznych wypraw Dumbledore`a? I wreszcie, kto jest tytułowym Księciem Półkrwi i jaką misję ma ON do spełnienia?', image: 'images/harry6.jpg', borrowed: false, returned: false },
  { id: 15, title: 'Harry Potter i Insygnia Śmierci. Tom 7', author: 'Joanne Kathleen Rowling', description: 'Po śmierci Dumbledore′a Zakon Feniksa wzmaga swoją działalność, próbując przeciwstawić się coraz potężniejszym siłom śmierciożerców. Harry wraz z przyjaciółmi nie wraca do Hogwartu, tylko wyrusza z misją znalezienia sposobu na pokonanie Voldemorta. Wyprawa ta pełna niepewności i zwątpienia najeżona jest niebezpieczeństwami, a co gorsza nikt nie wie, czy zakończy się sukcesem i czy wszyscy dotrwają do jej końca. Dlaczego Dumbledore nie pozostawił Harry′emu czytelnych wskazówek? Czy przeszłość nieżyjącego dyrektora kryje jakieś niezwykłe tajemnice? Jaką rolę odegra Snape przy boku Voldemorta? Czy Harry′emu uda się dotrzeć do najważniejszych miejsc i faktów dotyczących jego rodziny? Siódmy tom przyniesie odpowiedzi na wszystkie istotne dla potteromaniaków pytania.', image: 'images/harry7.jpg', borrowed: false, returned: false },
 /* { id: 8, title: ' ', author: ' ', description: 'opis', image: 'images/Adv2.jfif', available: true }  */
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
      bookElement.classList.add('image-holder');
      bookElement.innerHTML = `
      <a href="#">
        <a href="#popup-box"><img src="${book.image}"></a>
      </a><br>
      <strong>ID:</strong> ${book.id}<br>
      <strong>${book.title}</strong> <br>
      <strong>${book.author}</strong> `;
      bookElement.addEventListener('click', () => showBookDetails(book));
      searchResults.appendChild(bookElement);
    });
  }
}

//książki szczegóły
function showBookDetails(book) {
  bookDetails.innerHTML = `
	
    <h2>${book.title}</h2>
    <p><strong>ID:</strong> ${book.id}</p>
    <p><strong>Autor:</strong> ${book.author}</p>
    <p><strong>Opis:</strong> ${book.description}</p>
	 
    <h3>Zarządzanie książkami</h3>
    <button onclick="showAddBookForm()" class="btn">Dodaj książkę</button>
    <button onclick="showEditBookForm()" class="btn">Zedytuj ksiązkę</button>
    <button onclick="showDeleteBookForm()" class="btn">Usuń książkę</button>
  `;


  if (!book.borrowed && !book.reserved) {
    const borrowButton = document.createElement('button');
    borrowButton.classList.add('btn');
    borrowButton.textContent = 'Wypożycz książkę';
    borrowButton.addEventListener('click', () => borrowBook(book));
    bookDetails.appendChild(borrowButton);
  }

  if (book.borrowed) {
    const returnButton = document.createElement('button');
    returnButton.classList.add('btn');
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
  
//skrypt dodawania
function addBook(book) {
  const newBookId = books.length > 0 ? books[books.length - 1].id + 1 : 1;
  book.id = newBookId;
  books.push(book);
  displayResults(books);
  alert(`Książka "${book.title}" została pomyślnie dodana`);
}

//skrypt edytowania
function editBook(book) {
  const bookIndex = books.findIndex(b => b.id === book.id);

  if (bookIndex !== -1) {
    books[bookIndex] = book;
	displayResults(books);
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
	displayResults(books);
    alert(`Książka "${bookTitle}" została pomyślnie usunięta`);
  } else {
    alert('Nie odnaleziono książki');
  }
}


//panel dodawania
function showAddBookForm() {
  document.getElementById("adminRights").innerHTML="";
  const form = document.createElement('form');
  adminRights.innerHTML=`<h3>Dodaj książkę</h3>`;
  form.innerHTML = `
    <label for="add-book-title">Tytuł:
    <input type="text" id="add-book-title" required>
    </label>
    <label for="add-book-author">Autor:
    <input type="text" id="add-book-author" required>
    </label>
    <label for="add-book-description">Opis:
    <textarea id="add-book-description" required></textarea>
    </label>  
    <button type="submit" class="btn">Dodaj</button>
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
  document.getElementById("adminRights").appendChild(form);
  
}

//panel edytowania
function showEditBookForm() {
  document.getElementById("adminRights").innerHTML="";
  const form = document.createElement('form');
  adminRights.innerHTML=`<h3>Zedytuj książkę</h3>`;
  form.innerHTML = `
    <label for="edit-book-id">ID książi:
    <input type="number" id="edit-book-id" required>
    </label>
    <label for="edit-book-title">Tytuł:
    <input type="text" id="edit-book-title" required>
    </label>
    <label for="edit-book-author">Autor:
    <input type="text" id="edit-book-author" required>
    </label>
    <label for="edit-book-description">Opis:
    <textarea id="edit-book-description" required></textarea>
    </label>
    <button type="submit" class="btn">Edytuj</button>
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
  document.getElementById("adminRights").appendChild(form);
}

//panel usuwania
function showDeleteBookForm() {
  document.getElementById("adminRights").innerHTML="";
  const form = document.createElement('form');
  adminRights.innerHTML=`<h3>Usuń książkę</h3>`;
  form.innerHTML = `<br>
    
    <label for"delete-book-id">ID książki:
    <input type="number" id="delete-book-id" required>
    </label>
    <button type="submit" class="btn">Usuń</button>
  `;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const idInput = document.getElementById('delete-book-id');
    const bookId = parseInt(idInput.value);
    deleteBook(bookId);
    form.reset();
  });
  document.getElementById("adminRights").appendChild(form);
}
  
  