/* Shared site footer. See header.js for how the include works. */
(function () {
  var B = (typeof SITE_BASE === 'string') ? SITE_BASE : '';
  var year = new Date().getFullYear();

  // Personal portfolio social links.
  // Add other profiles here when you are ready to link them.
  var socials = [
    [
      'GitHub',
      'https://github.com/JonahRosenbloom',
      '<path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.65-.21.65-.46v-1.67c-2.65.58-3.21-1.13-3.21-1.13-.44-1.1-1.07-1.39-1.07-1.39-.87-.59.07-.58.07-.58.96.07 1.47.98 1.47.98.86 1.47 2.25 1.05 2.8.8.09-.62.34-1.05.61-1.29-2.12-.24-4.35-1.06-4.35-4.71 0-1.04.37-1.89.98-2.56-.1-.24-.43-1.21.09-2.52 0 0 .8-.26 2.61.98a9.1 9.1 0 0 1 4.75 0c1.81-1.24 2.61-.98 2.61-.98.52 1.31.19 2.28.09 2.52.61.67.98 1.52.98 2.56 0 3.66-2.23 4.47-4.36 4.7.35.3.65.87.65 1.76v2.53c0 .25.17.55.66.46A9.5 9.5 0 0 0 12 2.5Z"/>'
    ]
  ];

  var socialHtml = socials.map(function (s) {
    return '<a href="' + s[1] + '" target="_blank" rel="noreferrer noopener" ' +
      'class="site-footer__social-link" aria-label="' + s[0] + '" ' +
      'title="' + s[0] + '">' +
      '<svg viewBox="0 0 24 24" width="18" height="18" ' +
      'fill="currentColor" aria-hidden="true">' + s[2] + '</svg>' +
      '</a>';
  }).join('');

  document.write('' +
    '<footer id="comp-kbgakxmn" class="site-footer">' +
      '<div class="site-footer__row">' +

        '<a href="' + B + 'index.html" class="site-footer__brand">' +
          '<img src="' + B + 'assets/img/logo.png" ' +
          'alt="Jonah Rosenbloom circuit-trace monogram logo" ' +
          'class="site-footer__logo"/>' +
          '<span class="site-footer__tagline">' +
            'Electrical Engineering &bull; Software &bull; Scientific Modeling' +
          '</span>' +
        '</a>' +

        '<nav aria-label="Social links" class="site-footer__social">' +
          socialHtml +
        '</nav>' +

        '<div class="site-footer__contact">' +
          '<a href="mailto:ro_jonah@live.concordia.ca">ro_jonah@live.concordia.ca</a>' +
          '<span class="site-footer__dot" aria-hidden="true">&bull;</span>' +
          '<span>Montreal, QC, Canada</span>' +
          '<span class="site-footer__dot" aria-hidden="true">&bull;</span>' +
          '<span class="site-footer__copyright">' +
            '&copy; ' + year + ' Jonah Rosenbloom' +
          '</span>' +
        '</div>' +

      '</div>' +
    '</footer>');
})();
