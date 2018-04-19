const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

  let gallery = document.querySelector('#slide');
  let prevEl = document.querySelector('#anterior');
  let nextEl = document.querySelector('#proximo');
  let current = document.querySelector('#slide img');

  for (let imageEl of todasAsImagens) {
      let source = servidorDasImagens+imageEl;
      if (current.src !== source) {
          let dataEl = document.createElement('img');
          dataEl.src = source;
          dataEl.classList.add('oculto');
          gallery.appendChild(dataEl);
      }
  }

  prevEl.addEventListener('click', leftSlide);
  nextEl.addEventListener('click', rightSlide);

  function leftSlide() {
      let slides = document.querySelectorAll('#slide img');

      for (let i = 0; i < slides.length; i++) {
          if (!slides[i].classList.contains('oculto')) {
              slides[i].classList.add('oculto');

              if (i === 0) {
                  slides[slides.length - 1].classList.remove('oculto');
              } else {
                  slides[i - 1].classList.remove('oculto');
              }

              return;
          }
      }
  }

  function rightSlide() {
      let slides = document.querySelectorAll('#slide img');

      for (let i = 0; i < slides.length; i++) {
          if (!slides[i].classList.contains('oculto')) {
              slides[i].classList.add('oculto');

              if (i === slides.length - 1) {
                  slides[0].classList.remove('oculto');
              } else {
                  slides[i + 1].classList.remove('oculto');
              }

              return;
          }
      }
  }
