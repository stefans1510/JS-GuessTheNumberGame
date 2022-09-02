let dozvoljeniBrPokusaja = 5;
let najveciBroj = 10;
document.getElementById('najveciBroj').innerHTML = najveciBroj;
document.getElementById('dozvoljeniBrPokusaja').innerHTML = dozvoljeniBrPokusaja;
let nasumicniBroj = Math.floor(Math.random() * najveciBroj) + 1;
const prethodniPokusaji = document.querySelector('.prethodniPokusaji');
const poslednjiRezultat = document.querySelector('.poslednjiRezultat');
const manjeVise = document.querySelector('.manjeVise');
const potvrdiPokusaj = document.querySelector('.potvrdiPokusaj');
const poljeZaPokusaj = document.querySelector('.poljeZaPokusaj');
poljeZaPokusaj.focus();
let brojPokusaja = 1;
let resetDugme;

function proveraPokusaja() {
    const pokusajKorisnika = Number(poljeZaPokusaj.value);
    if (pokusajKorisnika == "") {
        alert("Polje za pokušaj ne sme biti 0 ili prazno!");
        return false;
    }

    if (brojPokusaja === 1) {
        prethodniPokusaji.textContent = 'Prethodni pokušaji: ';
    }
    prethodniPokusaji.textContent += pokusajKorisnika + ' ';
    if (pokusajKorisnika === nasumicniBroj) {
        poslednjiRezultat.textContent = 'Pogodio si broj! Igra je završena.';
        poslednjiRezultat.style.backgroundColor = 'green';
        manjeVise.textContent = '';
        krajIgre();
    } else if (brojPokusaja === 5) {
        poslednjiRezultat.textContent = 'Igra je završena... Probaj ponovo!';
        manjeVise.textContent = '';
        krajIgre();
    } else {
        poslednjiRezultat.textContent = 'Netačno!';
        poslednjiRezultat.style.backgroundColor = 'red';
        if (pokusajKorisnika < nasumicniBroj) {
            manjeVise.textContent = 'Broj je veći!';
        } else if (pokusajKorisnika > nasumicniBroj) {
            manjeVise.textContent = 'Broj je manji!';
        }
    }
    brojPokusaja++;
    poljeZaPokusaj.value = '';
    poljeZaPokusaj.focus();
}

potvrdiPokusaj.addEventListener('click', proveraPokusaja);


function krajIgre() {
    poljeZaPokusaj.disabled = true;
    potvrdiPokusaj.disabled = true;
    resetDugme = document.createElement('button');
    resetDugme.className = 'restart';
    resetDugme.textContent = 'Nova igra';
    document.body.appendChild(resetDugme);
    resetDugme.addEventListener('click', resetGame);
}

function resetGame() {
    brojPokusaja = 1;
    const resetParametara = document.querySelectorAll('.rezultati p');
    for (const resetParam of resetParametara) {
        resetParam.textContent = '';
    }
    resetDugme.parentNode.removeChild(resetDugme);
    poljeZaPokusaj.disabled = false;
    potvrdiPokusaj.disabled = false;
    poljeZaPokusaj.value = '';
    poljeZaPokusaj.focus();
    poslednjiRezultat.style.backgroundColor = 'white';
    nasumicniBroj = Math.floor(Math.random() * najveciBroj) + 1;
}

$(document).ready(function () {
    $('forma').submit(function (e) {
        e.preventDefault();
    });
});