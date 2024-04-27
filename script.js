




  function getRandomRGB() {
    var r = Math.floor(Math.random() * 256); // Random red value between 0 and 255
    var g = Math.floor(Math.random() * 256); // Random green value between 0 and 255
    var b = Math.floor(Math.random() * 256); // Random blue value between 0 and 255

    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

function updateColor() {
    var color = getRandomRGB();
    document.getElementById("holiday").style.color = color; // Update background color of the body
}

setInterval(updateColor, 500); // Call updateColor function every second (1000 milliseconds)



document.getElementById('colorInput').addEventListener('input', function() {
    let newColor = this.value; // Get the value of the color input

    // Set the value of the --main-color CSS variable to the new color
    document.documentElement.style.setProperty('--theme', newColor);
});


  
const colorInput = document.getElementById('colorInput');
const logoImg = document.querySelector('#ok'); // Select the img element inside the logo div

colorInput.addEventListener('input', function() {
    const color = this.value;
    logoImg.style.filter = `drop-shadow(0 0 0 ${color} )`;
});




// Set initial color
const initialColor = colorInput.value;
logoImg.style.filter = `invert(100%) sepia(100%) saturate(10000%) hue-rotate(${initialColor}) brightness(100%) contrast(100%)`;
