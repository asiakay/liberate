// CHARACTER CORRUPTION
const textElement = document.querySelector('.hacked-text');
const originalText = "LIBERATORY FUTURES LAB";
const chars = "!@#$%&*?¿¡";

function corruptText() {
    let newText = "";
    for (let i = 0; i < originalText.length; i++) {
        if (Math.random() > 0.9) {
            newText += chars[Math.floor(Math.random() * chars.length)];
        } else {
            newText += originalText[i];
        }
    }
    textElement.innerHTML = newText + '<span class="cursor"></span>';
    textElement.setAttribute('data-text', newText);
}

setInterval(corruptText, 150);

// ERROR LINES
function createErrorLine() {
    const line = document.createElement('div');
    line.className = 'error-line';
    line.style.left = `${Math.random() * 20}%`;
    line.style.animationDelay = `${Math.random() * 5}s`;
    document.querySelector('.container').appendChild(line);
    setTimeout(() => line.remove(), 5000);
}

setInterval(createErrorLine, 800);

// Modal Navigation
document.getElementById('navTrigger').addEventListener('click', function() {
    document.getElementById('navModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeNav').addEventListener('click', function() {
    document.getElementById('navModal').style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('navModal')) {
        document.getElementById('navModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});