let clickCount = 0;

document.getElementById('teleportButton').addEventListener('click', function() {
    clickCount++;
    document.getElementById('clickCounter').innerText = clickCount;
    
    const button = this;
    const maxX = window.innerWidth - button.offsetWidth;
    const maxY = window.innerHeight - button.offsetHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});