var generateButton = document.getElementById('generateButton');
var box = document.getElementById('box');
var color = document.getElementById('color');
var colorList = document.getElementById('colorList');
var colorBox = document.querySelector('color__box');
var letters = 'abcdef';
var numbers = '0123456789';
var getRandomInt = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; };
var getRandomColor = function () {
    var randomInt;
    var generatedColor = '';
    for (var i = 0; i < 6; i++) {
        randomInt = getRandomInt(0, 1);
        if (randomInt == 0) {
            generatedColor += numbers[getRandomInt(0, numbers.length - 1)];
        }
        else {
            generatedColor += letters[getRandomInt(0, letters.length - 1)];
        }
    }
    return '#' + generatedColor;
};
generateButton.addEventListener('click', function () {
    var randomColor = getRandomColor();
    box.style.backgroundColor = randomColor;
    color.innerHTML = randomColor;
    colorList.innerHTML += "\n    <li class=\"history__item color list-reset\">\n      <div class=\"color__box\" style=\"background-color: ".concat(randomColor, "\"></div>\n      <p class=\"color__name\">").concat(randomColor, "</p>\n    </li>");
});
