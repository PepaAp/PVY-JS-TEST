const imgKostka = document.getElementsByTagName('img')[0];
const captionKostka = document.querySelector('figcaption');
const statistika = document.getElementById('statistika');
const btnHrej = document.querySelector('.btn.btn-danger'); 
let hod;
let pocetHodu = [];
let clickFlag = false;
let intervalId;

btnHrej.addEventListener('click', function() {
    if (clickFlag == false) {
        animate();
        clickFlag = true;
        btnHrej.textContent = "Stop!"
    } else {
        clearInterval(intervalId);
        hod = Math.ceil(Math.random() * 6);
        captionKostka.innerHTML = `<span class = "badge rounded-pill bg-danger">${hod}</span>`;
        imgKostka.src = `img/kostka${hod}.png`;
        pocetHodu.push(hod);
        stats();
        console.log(sumaHodu());
        clickFlag = false;
        btnHrej.textContent = "Hrej"
    }
});

function animate() {
    intervalId = setInterval(() => {
        imgKostka.src = `img/kostka${Math.ceil(Math.random() * 6)}.png`;
    }, 300);
}

function sumaHodu() {
    let suma = 0;
    for (let i = 0; i < pocetHodu.length; i++) {
        suma += pocetHodu[i];
    }
    return suma;
}

function minHody() {
    let min = 6;
    for (let i = 0; i < pocetHodu.length; i++) {
        if (pocetHodu[i] < min) {
            min = pocetHodu[i];
        }
    }
    return min;
}

function maxHody() {
    let max = 1;
    for (let i = 0; i < pocetHodu.length; i++) {
        if (pocetHodu[i] > max) {
            max = pocetHodu[i];
        }
    }
    return max;
}

function prumHod() {
    let prumHod = sumaHodu() / pocetHodu.length;
    prumHod = prumHod.toFixed(2);
    return prumHod;
}

function stats() {
    statistika.innerHTML = `<li>Počet hodů: ${pocetHodu.length}</li>`;
    statistika.innerHTML += `<li>Součet hodů: ${sumaHodu()}</li>`;
    statistika.innerHTML += `<li>Nejmenší hod: ${minHody()}</li>`;
    statistika.innerHTML += `<li>Největší hod: ${maxHody()}</li>`;
    statistika.innerHTML += `<li>Průměrný hod: ${prumHod()}</li>`;
}