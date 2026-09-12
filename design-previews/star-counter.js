/* Live GitHub Star counts with a one-hour local cache and visible HTML fallback. */
(function () {
  'use strict';

  var TTL_MS = 60 * 60 * 1000;

  function format(count) {
    if (count >= 10000) return (count / 1000).toFixed(0) + 'k';
    if (count >= 1000) return (count / 1000).toFixed(1) + 'k';
    return String(count);
  }

  function readCache(key) {
    try {
      var raw = localStorage.getItem(key);
      if (!raw) return null;
      var value = JSON.parse(raw);
      if (Date.now() - value.timestamp > TTL_MS) return null;
      return value.stars;
    } catch (error) {
      return null;
    }
  }

  function writeCache(key, stars) {
    try {
      localStorage.setItem(key, JSON.stringify({ stars: stars, timestamp: Date.now() }));
    } catch (error) {
      /* Private browsing or a full cache must not affect page rendering. */
    }
  }

  function renderCount(element, count, repo) {
    var label = count.toLocaleString() + ' GitHub stars';
    element.querySelector('.stars-count').textContent = format(count);
    element.title = label;
    if (element.classList.contains('repo-stars')) {
      element.setAttribute('aria-label', label + ' for ' + repo.split('/').pop());
    }
  }

  document.querySelectorAll('[data-repo]').forEach(function (element) {
    var repo = element.getAttribute('data-repo');
    var count = element.querySelector('.stars-count');
    if (!repo || repo.indexOf('/') === -1 || !count) return;

    var cacheKey = 'gh-stars:' + repo;
    var cached = readCache(cacheKey);
    if (cached !== null) {
      renderCount(element, cached, repo);
      element.setAttribute('data-loaded', 'cache');
      return;
    }

    fetch('https://api.github.com/repos/' + repo, {
      headers: { Accept: 'application/vnd.github+json' }
    })
      .then(function (response) {
        if (!response.ok) throw new Error('GitHub API request failed');
        return response.json();
      })
      .then(function (data) {
        if (typeof data.stargazers_count !== 'number') throw new Error('Invalid Star count');
        writeCache(cacheKey, data.stargazers_count);
        renderCount(element, data.stargazers_count, repo);
        element.setAttribute('data-loaded', 'live');
      })
      .catch(function () {
        element.setAttribute('data-loaded', 'fallback');
      });
  });
}());
