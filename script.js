function addUser(){

    //przypisuje wartosc z localstorage albo pusta tablice
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
   
    //sprawdzenie czy chociaż jeden element tablicy spełnia warunek
    let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => 
        data.email.toLowerCase() == document.getElementById('email').value.toLowerCase());

    let empty = document.getElementById('email').value=="" || document.getElementById('password').value=="";
    if(!exist && !empty){
        formData.push({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
            role: document.querySelector('input[name="radioRole"]:checked').value
        });
        
        localStorage.setItem('formData', JSON.stringify(formData));
        alert("Dodano nowego użytkownika");
        document.querySelector('form').reset();
        document.getElementById('email').focus();
    }else if(exist && !empty){
        alert("Użytkownik z tym adresem posiada już konto :|");
    }else{
        alert("Wartości nie mogą być puste");
    }
   
}

function signIn(){
    let email = document.getElementById('email').value, password = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    
    let isLibrarian = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data =>
        data.role == "librarian" && data.email.toLowerCase() == email);

    //warunek na konto admina
    if(email == "admin" && password == "admin"){
        window.location.href = 'panelAdmin.html';
    }
    //warunek na konto bibliotekarza
    else if(exist && isLibrarian){
        alert("konto bibliotekarzyka");
        window.location.href = 'indexLib.html';
    }
    //warunek na konto customera
    else if(exist && !isLibrarian){
        alert("konto klienta");
        window.location.href = 'indexCust.html';
    }
    else{
        alert("błędne passy")
    }
}

function delUser(userEmail){
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    

    //BIERZE ID ELEMENTU TABLICY NA PODSTAWIE WARTOŚCI KLASY https://stackoverflow.com/questions/3396088/how-do-i-remove-an-object-from-an-array-with-javascript
    let  temp = formData.map(item => item.email).indexOf(userEmail); 
    
    formData.splice(temp,1);
    localStorage.setItem('formData', JSON.stringify(formData) || []);

}

function onDisplay(){
    if(localStorage.getItem('formData')){
    var forAdmin = document.querySelector("tbody");
    forAdmin.innerHTML = "";
    
    JSON.parse(localStorage.getItem('formData')).forEach(data => {
        forAdmin.innerHTML+=`
    <tr>
        <td>${data.email}</td>
        <td>${data.password}</td>
        <td>${data.role}</td>
        <td><button onclick="delUser('${data.email}'), onDisplay()">Usuń</button></td>
    </tr>
    `;
    });
    }

}