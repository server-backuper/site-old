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

document.addEventListener('DOMContentLoaded', () => {
  fetch('https://api.server-backuper.cloud/stats/accidents').then(r => r.text()).then(accidents => {
    try {
      document.getElementById('stats-accidents').textContent = accidents;
    } catch (e) {
      console.error(e);
    }
  });
  fetch('https://api.server-backuper.cloud/stats/serversCount').then(r => r.text()).then(servers => {
    try {
      document.getElementById('stats-server-count').textContent = servers;
    } catch (e) {
      console.error(e);
    }
  });
  fetch('https://api.server-backuper.cloud/stats/memberCount').then(r => r.text()).then(members => {
    try {
      document.getElementById('stats-member-count').textContent = members;
    } catch (e) {
      console.error(e);
    }
});
