document.addEventListener('DOMContentLoaded', function() {
    // Efek Konfeti saat halaman pertama kali dibuka
    confetti({
        particleCount: 150,
        spread: 180,
        origin: { y: 0.6 }
    });

    // Efek Mengetik untuk Pesan Cinta
    const messageText = "Hai sayang, Happy Girlfriend Day ya. Aku cuma mau bilang, aku beruntung banget punya kamu di hidup aku. Terima kasih buat semuanya ya...";
    const messageElement = document.getElementById('love-message');
    let i = 0;
    
    function typeWriter() {
        if (i < messageText.length) {
            messageElement.innerHTML += messageText.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }
    setTimeout(typeWriter, 1000);

    // Fungsionalitas Galeri Modal
    const modal = document.getElementById("myModal");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");
    const galleryImages = document.querySelectorAll('.gallery-img');

    galleryImages.forEach(img => {
        img.onclick = function(){
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    const span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }

    // Fungsionalitas Tombol Kejutan
    const surpriseBtn = document.getElementById('surprise-btn');
    const surpriseMessage = document.getElementById('surprise-message');
    const foodChoice = document.getElementById('foodChoice');

    surpriseBtn.addEventListener('click', function() {
        const isHidden = surpriseMessage.classList.contains('hidden');

        if (isHidden) {
            surpriseMessage.classList.remove('hidden');
            foodChoice.classList.remove('hidden');

            // Efek konfeti berulang
            var duration = 5 * 1000;
            var animationEnd = Date.now() + duration;
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }

            var interval = setInterval(function() {
              var timeLeft = animationEnd - Date.now();
              if (timeLeft <= 0) return clearInterval(interval);
              var particleCount = 50 * (timeLeft / duration);
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        } else {
            surpriseMessage.classList.add('hidden');
            foodChoice.classList.add('hidden');
        }
    });
});