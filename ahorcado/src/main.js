window.addEventListener('load', function(event) {
    constructor();
});

function constructor() {
    
    let obj = document.createElement('div');
    obj.textContent = 'El Ahorcado';
    document.body.appendChild(obj);
    
    obj = document.createElement('input');
    obj.type = 'password';
    obj.setAttribute('id', 'txt_palabra');
    document.body.appendChild(obj);

    obj = document.createElement('div');
    let span = document.createElement('span');
    span.textContent = 'Longitud:';

    obj.appendChild(span);
    span = document.createElement('span');
    span.setAttribute('id', 's_longitud');
    span.textContent = '0';
    obj.appendChild(span);

    document.body.appendChild(obj);

    obj = document.createElement('div');
    obj.setAttribute('id', 'contenedor');
    document.body.appendChild(obj);

    setEvents();
}

function setEvents() {
    let txt_palabra = document.getElementById('txt_palabra');
    txt_palabra.addEventListener('keyup', setPalabra, false);
}

function setPalabra() {
    let txt_palabra = document.getElementById('txt_palabra');
    let s_longitud = document.getElementById('s_longitud');
    let contenedor = document.getElementById('contenedor');

    contenedor.innerHTML = '';

    s_longitud.textContent = txt_palabra.value.length;

    let array = Array.from(txt_palabra.value)

    array.forEach((c, i) => {
        
        var input = document.createElement('input');
        input.type = 'text';
        input.style.width = '20px';

        if(i == 0 || i == array.length - 1) input.value = c;

        contenedor.appendChild(input);
    });
}