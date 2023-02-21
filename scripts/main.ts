const generateButton: any = document.getElementById('generateButton');
const box: any = document.getElementById('box');
const color: any = document.getElementById('color');
const colorList: any = document.getElementById('colorList');
const colorBox: any = document.querySelector('color__box')

const letters: string = 'abcdef';
const numbers: string = '0123456789';

const getRandomInt = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = (): string => {
  let randomInt: number;
  let generatedColor: string = '';

  for (let i = 0; i < 6; i++) {
    randomInt = getRandomInt(0, 1);

    if (randomInt == 0) {
      generatedColor += numbers[getRandomInt(0, numbers.length - 1)];
    } else {
      generatedColor += letters[getRandomInt(0, letters.length - 1)];
    }
  }

  return '#' + generatedColor;
}

generateButton.addEventListener('click', () => {
  let randomColor = getRandomColor();

  box.style.backgroundColor = randomColor;
  color.innerHTML = randomColor;

  colorList.innerHTML += `
    <li class="history__item color list-reset">
      <div class="color__box" style="background-color: ${randomColor}"></div>
      <p class="color__name">${randomColor}</p>
    </li>`;
});

