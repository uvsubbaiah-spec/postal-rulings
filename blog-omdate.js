/* Postal Rulings blog: show each post's OM date instead of the Blogger published date.
   Load once in the Blogger theme, just before </body>:
   <script src="https://uvsubbaiah-spec.github.io/postal-rulings/blog-omdate.js" defer></script> */
(function () {
  var DATE_SEL = '.date-header span, .date-header, .post-timestamp, time.published, abbr.published, .published, .post-date, .entry-date, .byline.post-timestamp a';
  function omDateIn(root) {
    var meta = root.querySelector('[data-rl-sec="meta"]'); if (!meta) return '';
    var cells = meta.querySelectorAll('td'), out = '';
    for (var i = 0; i < cells.length && !out; i++) {
      var divs = cells[i].getElementsByTagName('div');
      if (divs.length >= 2 && /^\s*(om\s*)?date\s*$/i.test(divs[0].textContent || '')) {
        var v = (divs[1].textContent || '').trim(); if (v && v !== '—' && v !== '-') out = v;
      }
    }
    return out;
  }
  function paint(el, om) {
    if (!el || el.getAttribute('data-rl-om')) return;
    var was = (el.textContent || '').trim();
    el.setAttribute('data-rl-om', '1');
    el.setAttribute('title', 'Published on the blog ' + was);
    el.innerHTML = '<span style="display:inline-block;background:#B30000;color:#fff;font-weight:700;font-size:.85em;letter-spacing:.03em;padding:3px 10px;border-radius:999px">OM dated ' +
      om.replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }) + '</span>';
  }
  function run() {
    var posts = document.querySelectorAll('.date-outer, .post-outer, article, .post, .blog-post');
    for (var i = 0; i < posts.length; i++) {
      var p = posts[i], om = omDateIn(p); if (!om) continue;
      var box = p.closest ? (p.closest('.date-outer') || p) : p;
      var dates = box.querySelectorAll(DATE_SEL), done = {};
      for (var j = 0; j < dates.length; j++) {
        var d = dates[j];
        if (d.closest && d.closest('[data-rl-sec]')) continue;            // never inside the post body
        if (d.querySelector && d.querySelector('[data-rl-om]')) continue;   // a parent of one already painted
        if (d.parentElement && d.parentElement.getAttribute('data-rl-om')) continue;
        paint(d, om);
      }
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', run); else run();
  setTimeout(run, 1500);
})();
