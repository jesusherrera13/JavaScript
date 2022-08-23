let options = [];

window.addEventListener("load", function(event) {


        var input = this.document.createElement('input');
        input.type = 'text';
        input.setAttribute('id', 'txt');
        this.document.body.appendChild(input);

        var button = this.document.createElement('button');
        button.innerHTML = 'Agregar';
        button.setAttribute('id', 'btn');
        this.document.body.appendChild(button);

        var p = this.document.createElement("p");
        p.textContent = "JavaScript";
        this.document.body.appendChild(p);

        var ul = this.document.createElement("ul");

        options.forEach((item, i) => {
                var li = this.document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
        });

        this.document.body.appendChild(ul);

        load();
});


function setText() {
        var el = document.getElementById('app');
        el.textContent = 'JavaScript';
}

function addText() {
        var txt = document.getElementById('txt');
        options.push(txt.value);
        refresh();
}

function refresh() {
        var ul = document.querySelector("ul");
        ul.innerHTML = '';
        options.forEach((item, i) => {
                var li = document.createElement('li');
                li.textContent = item;
                ul.appendChild(li);
        });
}

function load() {
        var el = document.getElementById('app');
        el.addEventListener('click', setText, false);

        var button = document.getElementById('btn');
        button.addEventListener('click', addText, false);
}

// document.addEventListener("DOMContentLoaded", load, false);