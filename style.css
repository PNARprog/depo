* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
    user-select: none;
    
    /* İstenen renk geçişli canlı arka plan */
    background: linear-gradient(-45deg, 
        #ffb6c1, /* Pembe */
        #ffffff, /* Beyaz */
        #ff0000, /* Kırmızı */
        #343a40, /* Füme */
        #008080, /* Mavi Yeşil */
        #40e0d0, /* Turkuaz */
        #000000  /* Siyah */
    );
    background-size: 400% 400%;
    animation: gradientBG 18s ease infinite;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* Ana Kalp ve Yazı Konumu */
.heart-container {
    position: relative;
    width: 320px;
    height: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.heart-svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 4px 15px rgba(0, 0, 0, 0.4));
}

.heart-path {
    fill: none;
    stroke: #e60000;
    stroke-width: 12;
    stroke-dasharray: 1500;
    stroke-dashoffset: 1500;
    stroke-linecap: round;
    animation: drawHeart 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.love-text {
    position: absolute;
    font-family: 'Dancing Script', cursive;
    font-weight: 700;
    font-style: italic;
    font-size: 2.8rem;
    color: #ff0000;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5), 0 0 12px rgba(255, 255, 255, 0.9);
    opacity: 0;
    transform: scale(0.8);
    animation: fadeInText 1.5s ease-out 3s forwards;
    text-align: center;
    pointer-events: none;
}

/* Arka Planda Sürekli Yükselen Küçük Kalpler */
.bg-hearts {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.floating-heart {
    position: absolute;
    bottom: -50px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    animation: floatUp linear infinite;
    pointer-events: none;
}

@keyframes floatUp {
    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }
    20% {
        opacity: 0.8;
    }
    100% {
        transform: translateY(-105vh) rotate(360deg);
        opacity: 0;
    }
}

/* Tıklayınca Açılan/Saçılan Küçük Kalp Efekti */
.click-heart {
    position: absolute;
    pointer-events: none;
    z-index: 100;
    animation: explodeHeart 1.2s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes explodeHeart {
    0% {
        opacity: 1;
        transform: translate(-50%, -50%) scale(0.3) rotate(0deg);
    }
    100% {
        opacity: 0;
        transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(1.4) rotate(var(--rot));
    }
}

@keyframes drawHeart {
    0% {
        stroke-dashoffset: 1500;
        fill: rgba(230, 0, 0, 0);
    }
    70% {
        stroke-dashoffset: 0;
        fill: rgba(230, 0, 0, 0);
    }
    100% {
        stroke-dashoffset: 0;
        fill: rgba(230, 0, 0, 0.18);
    }
}

@keyframes fadeInText {
    to {
        opacity: 1;
        transform: scale(1);
    }
}
