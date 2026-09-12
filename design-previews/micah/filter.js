(function () {
  var buttons = document.querySelectorAll('[data-category]');
  var papers = document.querySelectorAll('.paper[data-tags]');
  function showCategory(category, activeButton) {
    buttons.forEach(function (item) { item.classList.toggle('active', item === activeButton); });
    papers.forEach(function (paper) {
      var tags = paper.dataset.tags.split(' ');
      paper.hidden = category !== 'all' && tags.indexOf(category) === -1;
    });
  }
  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      showCategory(button.dataset.category, button);
    });
  });
  if (buttons.length) showCategory(buttons[0].dataset.category, buttons[0]);
}());
