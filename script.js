document.addEventListener("DOMContentLoaded", () => {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const responseMessage = document.getElementById("responseMessage");
    const heartsContainer = document.querySelector(".hearts-container");
    const proposalBox = document.querySelector(".proposal-box");

    let noClickCount = 0;
    
    yesButton.addEventListener("click", () => {
        responseMessage.innerHTML = "Yay! Love you forever! ❤️";
        responseMessage.style.color = "green";
        responseMessage.style.fontSize = "24px";
        responseMessage.style.display = "block";
    });

    noButton.addEventListener("mouseover", () => {
        const x = Math.random() * (window.innerWidth - noButton.clientWidth);
        const y = Math.random() * (window.innerHeight - noButton.clientHeight);
        noButton.style.position = "absolute";
        noButton.style.left = `${x}px`;
        noButton.style.top = `${y}px`;
    });
    
    noButton.addEventListener("click", () => {
        noClickCount++;
        if (noClickCount >= 3) {
            responseMessage.innerHTML = "Haha! No is not an option! 🤣";
            responseMessage.style.color = "red";
            noButton.style.display = "none";
        }
    });

    function createFloatingHeart() {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");
        heart.style.left = `${Math.random() * 95}vw`;
        heart.style.top = "1vh";
        heart.style.fontSize = `${Math.random() * 2 + 1}rem`;
        heart.style.animation = `floatUp ${Math.random() * 10 + 2}s linear infinite`;
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
    
    setInterval(createFloatingHeart, 300);

    // Set buttons inside proposal-box
    proposalBox.appendChild(yesButton);
    proposalBox.appendChild(noButton);
    proposalBox.appendChild(responseMessage);

    yesButton.style.position = "relative";
    yesButton.style.marginRight = "20px";
    
    noButton.style.position = "relative";

    responseMessage.style.display = "none";
    responseMessage.style.marginTop = "20px";
});
