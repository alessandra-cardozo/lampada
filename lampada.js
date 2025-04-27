const lampada = document.getElementById('lampada');
const ligar = document.getElementById('ligar');
const desligar = document.getElementById('desligar');
const quebrar = document.getElementById('quebrar');
const restaurar = document.getElementById('restaurar');
const body = document.body;

function estaQuebrada() {
    return lampada.src.includes('quebrada');
}

ligar.addEventListener('click', () => {
    if (!estaQuebrada()) {
        lampada.src = './img/ligada.jpg';
        lampada.style.transform = 'scale(1.1)';
        lampada.style.opacity = '1';
        body.style.background = 'linear-gradient(90deg, #fdfd96, #ffe66d)';
    }
});

desligar.addEventListener('click', () => {
    if (!estaQuebrada()) {
        lampada.src = './img/desligada.jpg';
        lampada.style.transform = 'scale(1)';
        lampada.style.opacity = '0.7';
        body.style.background = 'linear-gradient(90deg, #3b3b3b, #1a1a1a)';
    }
});

quebrar.addEventListener('click', () => {
    lampada.src = './img/quebrada.jpg';
    lampada.style.transform = 'rotate(10deg)';
    lampada.style.opacity = '0.5';
    body.style.background = 'linear-gradient(90deg, #800000, #660000)';
});

restaurar.addEventListener('click', () => {
    lampada.src = './img/desligada.jpg';
    lampada.style.transform = 'scale(1)';
    lampada.style.opacity = '1';
    body.style.background = 'linear-gradient(90deg, #3b3b3b, #1a1a1a)';
});
