document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('typing-text');
  const texts = ["Photographer", "Videographer", "Traveller", "Content Creator", "Storyteller"];
  let currentText = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 150; // Speed of typing

  function type() {
      const current = texts[currentText];
      if (!isDeleting && charIndex < current.length) {
          textElement.textContent += current.charAt(charIndex);
          charIndex++;
          setTimeout(type, typingSpeed);
      } else if (isDeleting && charIndex > 0) {
          textElement.textContent = current.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(type, typingSpeed / 2);
      } else {
          isDeleting = !isDeleting;
          if (!isDeleting) {
              currentText = (currentText + 1) % texts.length;
          }
          setTimeout(type, 500);
      }
  }

  type();
});
