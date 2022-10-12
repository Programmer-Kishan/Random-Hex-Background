
container = document.querySelector('.container');
hexText = document.getElementById('hexText');

const generateRandomHex = () => {
    red = Math.floor(Math.random()*256).toString(16);
    blue = Math.floor(Math.random()*256).toString(16);
    green = Math.floor(Math.random()*256).toString(16);

    hexValue1 = '#' + red + blue + green;

    red = Math.floor(Math.random()*256).toString(16);
    blue = Math.floor(Math.random()*256).toString(16);
    green = Math.floor(Math.random()*256).toString(16);

    hexValue2 = '#' + red + blue + green;

    container.style.background = `linear-gradient(to right,${hexValue1},${hexValue2}`; 
    hexText.innerHTML = `background: linear-gradient(to right, ${hexValue1}, ${hexValue2})`;
}

generateRandomHex();