const imgKostka = document.getElementsByTagName('img')[0];
const captionKostka = document.querySelector('figcaption');
const statistika = document.getElementById('statistika');
const btnHrej = document.querySelector('.btn.btn-danger'); 
console.log(btnHrej);

btnHrej.addEventListener('click', function() {
    console.log('hraje to');
});