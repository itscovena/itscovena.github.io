// Kartlara tıklandığında ufak bir animasyon efekti
document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.95)';
    });
    card.addEventListener('mouseup', () => {
        card.style.transform = 'scale(1.05)';
        setTimeout(() => {
            card.style.transform = 'translateY(-10px)';
        }, 150);
    });
});

// İleride tool'ları dinamik olarak aratmak istersen bu yapıyı kullanabilirsin
console.log("itscovena sistem hazır.");
