document.getElementById('datanasc').value = new Date().toISOString().slice(0, 10);

let invio = document.getElementById('invia');
invio.addEventListener('click', utente, false)

let show = document.getElementById('show');
let visible = true;

function utente(){
    visible = false;
    if(visible==false){ show.style.visibility='visible'}
    //console.log('Hai premuto invio')
    document.getElementById('resultnome').textContent = document.getElementById('nome').value;
    document.getElementById('resultcognome').textContent = document.getElementById('cognome').value;
    document.getElementById('resultcf').textContent = document.getElementById('cf').value;
    document.getElementById('resultdatanasc').textContent = document.getElementById('datanasc').value;
    document.getElementById('resultindirizzo').textContent = document.getElementById('indirizzo').value;
    document.getElementById('resultmail').textContent = document.getElementById('mail').value;
    document.getElementById('resulttelefono').textContent = document.getElementById('telefono').value;
    document.getElementById('resultoccupazione').textContent = document.getElementById('occupazione').value;
}