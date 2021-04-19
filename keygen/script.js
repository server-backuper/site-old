'use strict';
const NodeRSA = require('node-rsa');
const Swal = require('sweetalert2').default;
const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  showConfirmButton: false,
  timer: 2000
});

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate-button').onclick = () => {
    try {
      let key = new NodeRSA({
        b: 1024
      });
      let privateKey = key.exportKey('pkcs8-private');
      let publicKey = key.exportKey('pkcs8-public');
      let keys = `${privateKey}\n${publicKey}`;
      console.debug(keys);
      let textarea = document.createElement('textarea');
      textarea.style.opacity = 0;
      textarea.value = keys;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      textarea.remove();
      textarea = null;
      Toast.fire({
        icon: 'success',
        title: '<span class="alert-text">Copied keys to clipboard</span>'
      });
    } catch (e) {
      console.error(e);
      Toast.fire({
        icon: 'error',
        title: '<span class="alert-text">Some error happened</span>'
      });
    }
  }
});