// 1. Arka planda sürekli kendiliğinden yükselen küçük kalpler oluşturma
const bgHeartsContainer = document.getElementById('bgHearts');
const heartSymbols = ['♥', '💖', '💕', '💗', '❤️'];

function createBackgroundHeart() {
    const heart = document.createElement('div');
    heart.classList.add('floating-heart');
    
    // Rastgele simge, konum ve boyut
    heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's'; // 4-7 saniye arası
    heart.style.fontSize = (Math.random() * 15 + 12) + 'px';
    
    // Kırmızı, pembe ve beyaz tonlarında renk varyasyonları
    const colors = ['#ffffff', '#ffccd5', '#ff4d6d', '#ff758f', '#ffb3c1'];
    heart.style.color = colors[Math.floor(Math.random() * colors.length)];

    bgHeartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

// Her 300 milisaniyede bir arka plana yeni bir küçük kalp ekler
setInterval(createBackgroundHeart, 300);

// 2. Ekranda herhangi bir yere tıklandığında/dokunulduğunda kalp patlaması
document.addEventListener('click', (e) => {
    createHeartBurst(e.clientX, e.clientY);
});

function createHeartBurst(x, y) {
    const count = 12; // Tek tıkta saçılacak kalp sayısı

    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        heart.classList.add('click-heart');
        heart.innerText = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Farenin bulunduğu konum
        heart.style.left = x + 'px';
        heart.style.top = y + 'px';

        // Rastgele saçılma yönleri ve açıları
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 120 + 40;
        const tx = Math.cos(angle) * velocity + 'px';
        const ty = Math.sin(angle) * velocity + 'px';
        const rot = (Math.random() * 360 - 180) + 'deg';

        heart.style.setProperty('--tx', tx);
        heart.style.setProperty('--ty', ty);
        heart.style.setProperty('--rot', rot);
        heart.style.fontSize = (Math.random() * 18 + 14) + 'px';

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 1200);
    }
}
