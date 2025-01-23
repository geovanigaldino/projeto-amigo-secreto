let listaAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById("amigo");
    let elementoListaAmigos = document.getElementById("listaAmigos");

    if (amigo.value.trim() === "") {
        alert("O nome do amigo não pode estar vazio.");
    return;
    }

    if (listaAmigos.includes(amigo.value)) {
        alert("Esse nome já foi adicionado.");
        return;
    }

    listaAmigos.push(amigo.value);

    if (elementoListaAmigos.textContent === "") {
        elementoListaAmigos.textContent = amigo.value;
    } else {
        elementoListaAmigos.textContent += ", " + amigo.value;
    }

    amigo.value = "";
}

function sortearAmigo() {
    if (listaAmigos.length < 1) {
        alert("Adicione amigos antes de fazer o sorteio.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    let resultadoSorteio = document.getElementById("resultadoSorteio");
    resultadoSorteio.textContent = "Seu amigo secreto é: " + amigoSorteado;
}
