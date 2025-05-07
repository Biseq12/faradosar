// Funcția de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const CNP = document.getElementById('CNP').value;
    const password = document.getElementById('password').value;

    // Verificare login
    const storedUser = localStorage.getItem(CNP);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            // Salvăm CNP-ul în localStorage pentru a-l folosi pe pagina "Contul meu"
            localStorage.setItem('CNP', CNP);
            window.location.href = 'contulmeu.html'; // Redirecționare
        } else {
            alert('CNP sau parolă incorectă.');
        }
    } else {
        alert('Nu există un cont cu acest CNP.');
    }
});

// Funcția de înregistrare
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nume = document.getElementById('nume').value;
    const CNP = document.getElementById('CNP').value;
    const telefon = document.getElementById('telefon').value;
    const email = document.getElementById('email').value;
    const adresa = document.getElementById('adresa').value;
    const buletin = document.getElementById('buletin').files[0].name;
    const password = document.getElementById('password').value;

    // Creare obiect utilizator
    const user = {
        nume: nume,
        CNP: CNP,
        telefon: telefon,
        email: email,
        adresa: adresa,
        buletin: buletin,
        password: password
    };

    // Verificăm dacă CNP-ul deja există
    if (localStorage.getItem(CNP)) {
        alert('Contul cu acest CNP există deja!');
    } else {
        // Salvează utilizatorul în localStorage
        localStorage.setItem(CNP, JSON.stringify(user));

        // Salvăm CNP-ul în localStorage pentru a-l folosi pe pagina "Contul meu"
        localStorage.setItem('CNP', CNP);
        
        // Redirecționare către pagina de cont
        window.location.href = 'contulmeu.html';
    }
});

// Funcția pentru încărcarea datelor utilizatorului pe pagina "Contul meu"
window.onload = function() {
    const CNP = localStorage.getItem('CNP'); // obține CNP-ul din localStorage
    if (CNP) {
        const user = JSON.parse(localStorage.getItem(CNP));
        document.getElementById('userName').textContent = user.nume;
        document.getElementById('userCNP').textContent = user.CNP;
        document.getElementById('userTelefon').textContent = user.telefon;
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userAdresa').textContent = user.adresa;
        document.getElementById('userBuletin').textContent = user.buletin;
    } else {
        window.location.href = 'index.html';
    }
}

// Funcția pentru logout
function logout() {
    localStorage.removeItem('CNP');
    window.location.href = 'index.html';
}
