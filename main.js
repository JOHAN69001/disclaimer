document.body.onload = () => {
  window.scrollTo(0,0);
  const close = document.querySelector('.js-close-disclaimer')
  close.onclick = () => {
    document.querySelector('.js-disclaimer').classList.add('fade')
    document.body.style.overflow = 'auto'
    document.querySelector('.js-main').classList.remove('blurred')
    document.querySelector('.js-hero').classList.remove('blurred')
  }
}
