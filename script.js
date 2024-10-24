document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contato-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (nome === "" || email === "" || mensagem === "") {form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (nome === "" || email === "" || mensagem === "") {
        alert("Por favor, preencha todos os campos antes de enviar.");
    } else {
        alert("Mensagem enviada com sucesso! Agradecemos o seu contato.");
        form.reset();
    }
});

// Slider e outras animações
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) {
        console.error("Nenhum slide encontrado.");
        return;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000);
}
showSlides();

window.changeSlide = function(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");
    if (slides.length === 0) {
        console.error("Nenhum slide encontrado.");
        return;
    }
    if (slideIndex > slides.length) { slideIndex = 1 }
    if (slideIndex < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
};

// Garantir que as imagens dos slides sejam carregadas
const slideImages = document.querySelectorAll(".slide img");
slideImages.forEach((img) => {
    img.addEventListener("error", function() {
        console.error("Erro ao carregar a imagem: ", img.src);
        img.style.display = "none";
    });
    img.addEventListener("load", function() {
        img.style.display = "block";
    });
});

// Efeito de Fade In
document.body.style.opacity = 0;
document.body.style.transition = "opacity 1.5s ease";
window.addEventListener("load", function() {
    document.body.style.opacity = 1;
});

// Efeito de Digitação no Título
const typedText = document.querySelector(".typed-text");
if (typedText) {
    const textArray = typedText.getAttribute("data-text").split(",");
    let arrayIndex = 0;
    let charIndex = 0;
    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            typedText.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 2000);
        }
    }
    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 100);
        } else {
            arrayIndex++;
            if (arrayIndex >= textArray.length) arrayIndex = 0;
            setTimeout(type, 1500);
        }
    }
    type();
}

// Efeito de Carrossel Automático
const carrosselItems = document.querySelectorAll(".carrossel-item");
let carrosselIndex = 0;
function showCarrosselItem() {
    if (carrosselItems.length === 0) return;
    carrosselItems.forEach(item => item.classList.remove("active"));
    carrosselItems[carrosselIndex].classList.add("active");
    carrosselIndex++;
    if (carrosselIndex >= carrosselItems.length) {
        carrosselIndex = 0;
    }
    setTimeout(showCarrosselItem, 3000);
}
showCarrosselItem();

// Efeito de Parallax em imagens de fundo
window.addEventListener("scroll", function() {
    const parallaxElements = document.querySelectorAll(".parallax");
    parallaxElements.forEach(element => {
        let speed = element.getAttribute("data-speed");
        element.style.transform = `translateY(${window.scrollY * speed}px)`;
    });
});

// Animação ao Rolar
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll() {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 150;
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }
    });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Adição de Modal para Promoções Especiais
const modal = document.getElementById("promo-modal");
const closeModalButton = document.getElementById("close-modal");

if (modal && closeModalButton) {
    setTimeout(function() {
        modal.style.display = "block";
    }, 7000); // Mostrar modal após 7 segundos

    closeModalButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

// Efeito de Contagem Regressiva para Promoções
const countdownElement = document.getElementById("countdown");
if (countdownElement) {
    let countdownTime = 60 * 5; // 5 minutos em segundos

    function updateCountdown() {
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        countdownElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        countdownTime--;
        if (countdownTime >= 0) {
            setTimeout(updateCountdown, 1000);
        } else {
            countdownElement.textContent = "Promoção Expirada!";
        }
    }
    updateCountdown();
}

// Animação de Scroll Suave para Links Internos
const smoothScrollLinks = document.querySelectorAll("a[href^='#']");
smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

// Efeito de Confete ao Finalizar Compra
const confettiButton = document.getElementById("confetti-button");
if (confettiButton) {
    confettiButton.addEventListener("click", function() {
        for (let i = 0; i < 150; i++) {
            createConfetti();
        }
    });
}

function createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    document.body.appendChild(confetti);
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        confetti.remove();
    }, 5000);
}
            alert("Por favor, preencha todos os campos antes de enviar.");
        } else {
            alert("Mensagem enviada com sucesso! Agradecemos o seu contato.");
            form.reset();
        }
    });

    // Slider e outras animações
    let slideIndex = 0;
    function showSlides() {
        const slides = document.getElementsByClassName("slide");
        if (slides.length === 0) {
            console.error("Nenhum slide encontrado.");
            return;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000);
    }
    showSlides();

    window.changeSlide = function(n) {
        slideIndex += n;
        const slides = document.getElementsByClassName("slide");
        if (slides.length === 0) {
            console.error("Nenhum slide encontrado.");
            return;
        }
        if (slideIndex > slides.length) { slideIndex = 1 }
        if (slideIndex < 1) { slideIndex = slides.length }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    };

    // Efeito de Fade In
    document.body.style.opacity = 0;
    document.body.style.transition = "opacity 1.5s ease";
    window.addEventListener("load", function() {
        document.body.style.opacity = 1;
    });

    // Outros efeitos e animações...
});
