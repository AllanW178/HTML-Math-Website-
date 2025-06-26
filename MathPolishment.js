

document.addEventListener('DOMContentLoaded', function() {Add commentMore actions
  

  const mainContent = document.querySelector('.main-content');

  if (mainContent) {
    mainContent.style.opacity = '0';
    setTimeout(() => {
      mainContent.style.transition = 'opacity 0.5s ease';
      mainContent.style.opacity = '1';

    }, 100);

  }


  const textarea = document.querySelector('.post-form textarea');

  if (textarea) {
    const charCount = document.querySelector('.char-count');
    const maxLength = textarea.getAttribute('maxlength');
    
    textarea.addEventListener('input', function() {
      const remaining = maxLength - this.value.length;
      charCount.textContent = `${remaining} characters remaining`;
      
      if (remaining < 50) {
        charCount.style.color = '#e74c3c';

      } else {
        charCount.style.color = '#666';

      }

    });

  }



  const postForm = document.querySelector('.post-form');

  if (postForm) {
    postForm.addEventListener('submit', function(e) {
      const textarea = this.querySelector('textarea');
      if (textarea.value.trim().length < 10) {
        alert('Please write at least 10 characters for your post');
        e.preventDefault();

      } else {
        alert('Post submitted successfully!');
      }
    });
  }


  const levelLabels = document.querySelectorAll('.level-selector label');

  if (levelLabels.length > 0) {

    levelLabels.forEach(label => {
      label.addEventListener('click', function() {
        levelLabels.forEach(l => l.style.transform = 'scale(1)');
        this.style.transform = 'scale(1.05)';

      });
    });

  }


  const footer = document.createElement('footer');
  footer.style.textAlign = 'center';
  footer.style.padding = '20px';
  footer.style.color = '#666';
  footer.innerHTML = `© ${new Date().getFullYear()} GEOMETRIX - LearnMATH`;
  document.body.appendChild(footer);

});

























