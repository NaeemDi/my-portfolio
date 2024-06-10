'use strict';

const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

const links = document.querySelectorAll('a, .project-wrapper');
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    cursor.classList.add('hovered');
  });
  link.addEventListener('mouseout', () => {
    cursor.classList.remove('hovered');
  });
});


document.oncontextmenu = function() {
  return false;
}