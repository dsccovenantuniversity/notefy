;() => {
  const button = document.querySelectorAll('.navbar-button')
  const lgMenu = document.querySelectorAll('.navbar-small')
  const smMenu = document.querySelectorAll('.navbar-large')

  if (button.length && smMenu.length) {
    console.log('Hi there')
    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener('click', () => {
        for (let j = 0; j < smMenu.length; j++) {
          smMenu[j].classList.toggle('hidden')
          lgMenu[j].classList.toggle('hidden')
        }
      })
    }
  }
}
