const interaction = document.querySelector('.interaction-404');
// 404 interaction
window.addEventListener('mousemove', (e) => {
    let top = e.pageY;
    let left = e.pageX;
    interaction.style.top = `${e.pageY}px`;
    interaction.style.left = `${e.pageX}px`;
});