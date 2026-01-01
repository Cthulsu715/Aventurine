const ARTICLES = [
    { title: "命運從未公平", url: "Inherently_Unjut_Destiny.html" },
    { title: "最後的贏家", url: "Final_Victor.html" },
    { title: "願旅途永遠坦然", url: "journey_Forever_Peaceful.html" },
];

function startSpin() {
    const spinButton = document.getElementById('spin-button');
    const rouletteDisplay = document.getElementById('roulette-display');

    if (!spinButton || !rouletteDisplay) {
        console.error("Error: Element not found.");
        return;
    }

    spinButton.disabled = true;
    spinButton.textContent = "運算中...";

    let spinCount = 0;
    const interval = setInterval(() => {
        const icons = ['◆', '♠', '♥', '♣'];
        rouletteDisplay.innerHTML = `
            <span class="icon-chip">${icons[Math.floor(Math.random() * icons.length)]}</span>
            <span class="icon-chip">${icons[Math.floor(Math.random() * icons.length)]}</span>
            <span class="icon-chip">${icons[Math.floor(Math.random() * icons.length)]}</span>
        `;
        spinCount++;

        if (spinCount > 30) {
            clearInterval(interval);
            const randomIndex = Math.floor(Math.random() * ARTICLES.length);
            const targetArticle = ARTICLES[randomIndex];
            const titleColor = randomIndex % 2 === 0 ? '#C4A15A' : '#0F8A7B';
            
            rouletteDisplay.innerHTML = `<span style="font-size: 0.4em; line-height: 1.5; display:block; color: ${titleColor};">${targetArticle.title}</span>`;
            spinButton.textContent = "已完成評估，正在導向...";
            
            setTimeout(() => {
                window.location.href = targetArticle.url;
                spinButton.disabled = false;
                spinButton.textContent = "啟動風險評估 (RISK ASSESSMENT)";
            }, 1000); 
        }
    }, 80); 
}