(function () {
  var button = document.querySelector('.lang-switcher button');
  if (!button) return;
  button.addEventListener('click', function () {
    document.body.classList.toggle('zh');
    button.textContent = document.body.classList.contains('zh') ? 'EN' : '中文';
  });
}());
