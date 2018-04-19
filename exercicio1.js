// recupera do DOM os botões existentes no article de id #aliens
let buttonList = document.querySelectorAll('#aliens .botao-expandir-retrair');

// percorre a lista de botões e atrela uma função ao evento de 'click' para cada um deles
for (let buttonEl of buttonList) {
    buttonEl.addEventListener('click', function (e) {
        expand_retract(buttonEl);
    });
}

function expand_retract(buttonEl) {
    if (buttonEl.innerText === '+') {
        buttonEl.parentNode.classList.add('expandido');
        buttonEl.innerText = '-';
    } else {
        buttonEl.innerText = '+';
        buttonEl.parentNode.classList.remove('expandido');
    }
}
