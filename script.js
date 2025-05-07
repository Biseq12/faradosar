// Funcția de login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const USERDATA = document.getElementById('USERDATA').value;
    const password = document.getElementById('password').value;

    // Verificare login
    const storedUser = localStorage.getItem(USERDATA);
    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            // Salvăm USERDATA-ul în localStorage pentru a-l folosi pe pagina "Contul meu"
            localStorage.setItem('USERDATA', USERDATA);
            window.location.href = 'contulmeu.html'; // Redirecționare
        } else {
            alert('Utilizator sau parolă incorectă.');
        }
    } else {
        alert('Nu există un cont cu acest utilizator.');
    }
});

// Funcția de înregistrare
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nume = document.getElementById('nume').value;
    const USERDATA = document.getElementById('USERDATA').value;
    const telefon = document.getElementById('telefon').value;
    const email = document.getElementById('email').value;
    const adresa = document.getElementById('adresa').value;
    const buletin = document.getElementById('buletin').files[0].name;
    const password = document.getElementById('password').value;

    // Creare obiect utilizator
    const user = {
        nume: nume,
        USERDATA: USERDATA,
        telefon: telefon,
        email: email,
        adresa: adresa,
        buletin: buletin,
        password: password
    };

    // Verificăm dacă USERDATA-ul deja există
    if (localStorage.getItem(USERDATA)) {
        alert('Contul cu acest utilizator există deja!');
    } else {
        // Salvează utilizatorul în localStorage
        localStorage.setItem(USERDATA, JSON.stringify(user));

        // Salvăm USERDATA-ul în localStorage pentru a-l folosi pe pagina "Contul meu"
        localStorage.setItem('USERDATA', USERDATA);
        
        // Redirecționare către pagina de cont
        window.location.href = 'contulmeu.html';
    }
});

// Funcția pentru încărcarea datelor utilizatorului pe pagina "Contul meu"
window.onload = function() {
    const USERDATA = localStorage.getItem('USERDATA'); // obține USERDATA-ul din localStorage
    if (USERDATA) {
        const user = JSON.parse(localStorage.getItem(USERDATA));
        document.getElementById('userName').textContent = user.nume;
        document.getElementById('userUSERDATA').textContent = user.USERDATA;
        document.getElementById('userTelefon').textContent = user.telefon;
        document.getElementById('userEmail').textContent = user.email;
        document.getElementById('userAdresa').textContent = user.adresa;
    } else {
        window.location.href = 'index.html';
    }
}

// Funcția pentru logout
function logout() {
    localStorage.removeItem('USERDATA');
    window.location.href = 'index.html';
}


window.addEventListener("scroll", function() {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
