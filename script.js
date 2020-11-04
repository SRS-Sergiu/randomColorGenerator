let buttonVar = document.querySelector('button');
let h3Var = document.querySelector('h1');
let bodyVar = document.querySelector('body');
let makeRandomColor  = () => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        return  `rgb(${r}, ${g}, ${b})`;
} ;
buttonVar.addEventListener('click', () => {
        let randomColor = makeRandomColor();
        h3Var.innerText = randomColor;
        bodyVar.style.backgroundColor = randomColor;
});