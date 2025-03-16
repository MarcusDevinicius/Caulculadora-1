const display = document.querySelector('.calculator-display p');
const buttons = document.querySelectorAll('.button-container button');

console.log(buttons);

function pegandoTeclas() {
    buttons.forEach((button => {
        button.addEventListener('click', ()=>{
            addOnDisplay(button);
        });
    }))
}

function addOnDisplay(button) {
    display.innerText += button.innerText;
    // console.log(button.innerText);
    const num1 = button.innerText;
    console.log(num1)
    
    if(isNaN(button.innerText)) {
        console.log( button.innerText); //Parei aqui para tentar fazer uma função específica para soma.
        function soma(num1) {
            console.log(num1)
        }
    }

}



pegandoTeclas();

