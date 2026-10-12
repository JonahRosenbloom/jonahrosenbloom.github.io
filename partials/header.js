(function () {
  var B = (typeof SITE_BASE === 'string') ? SITE_BASE : '';
  var PAGE = (typeof SITE_PAGE === 'string') ? SITE_PAGE : '';
  var cur = function (id) { return PAGE === id ? ' aria-current="page"' : ''; };

  var links = [
    ['home', 'Home', B + 'index.html'],
    ['about', 'About', B + 'about/index.html'],
    ['blog', 'Blog', B + 'blog/index.html'],
    ['portfolio', 'Portfolio Page', B + 'portfolio/index.html']
  ];
  var navHtml = links.map(function (l) {
    return '<li><a class="site-header__link" data-part="menu-item-link" href="' + l[2] + '"' + cur(l[0]) + '>' + l[1] + '</a></li>';
  }).join('');

  document.write('' +
'<header class="site-header">' +
  '<div class="site-header__row">' +
    '<a href="' + B + 'index.html" class="site-header__brand" aria-label="Home">' +
      '<img src="' + B + 'assets/img/logo.png" alt="JR circuit-trace monogram logo" class="site-header__logo"/>' +
    '</a>' +
    '<nav class="navbar" aria-label="Site">' +
      '<ul class="site-header__nav-list">' + navHtml + '</ul>' +
    '</nav>' +
    '<button type="button" class="hamburger-open-button site-header__burger" aria-label="Menu">' +
      '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>' +
    '</button>' +
  '</div>' +
'</header>');
})();
