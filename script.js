'use strict';
let currentKey = ['s', 'b', '4'];
let already = false;
window.onload = () => {
  window.addEventListener('keypress', (e) => {
    if (already) return false;
    if (e.key.toLowerCase() === currentKey[0]) {
      currentKey.shift();
    } else {
      currentKey = ['s', 'b', '4'];
    }
    if (currentKey.length < 1) {
      currentKey.length = 1;
      let element = document.createElement('footer');
      element.classList.add('text');
      element.classList.add('small');
      element.textContent = 'This site may be sus';
      document.body.appendChild(element);
      already = true;
    }
  });
}