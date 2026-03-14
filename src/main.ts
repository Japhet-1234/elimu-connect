import './index.css';

console.log('Elimu Hub main.ts loaded');

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const msg = document.createElement('p');
  msg.textContent = 'JavaScript pia imepakiwa vizuri!';
  msg.style.fontWeight = 'bold';
  msg.style.marginTop = '20px';
  body.appendChild(msg);
});
