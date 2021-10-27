const bgSwitcherBtn = document.querySelector('.bgcolor-switcher');

bgSwitcherBtn.addEventListener('click', _.throttle(onChangeColor, 2000));

function onChangeColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}