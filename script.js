document.addEventListener('DOMContentLoaded', function() {
  var glide = new Glide('.glide', {
    type: 'carousel',
    perView: 1,
   
    gap: 20,
    autoplay: 3000,
  })

  glide.on('run.after', function() {
    var bullets = document.querySelectorAll('.glide__bullet')
    var currentIndex = glide.index
    
    bullets.forEach(function (bullet, index) {
      if(index === currentIndex) {
        bullet.classList.add('active')
      } else {
        bullet.classList.remove('active')
      }
    })
  })

  glide.mount()
})