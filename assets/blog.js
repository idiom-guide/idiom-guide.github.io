/* ECHO Blog：文章頁「複製連結」按鈕（中英文版共用）。按鈕文字取自 data-ok／data-fail 屬性。 */
(function () {
  var b = document.getElementById('bl-copy');
  if (!b) return;
  var t0 = b.textContent;
  function done(ok) {
    b.textContent = ok ? b.getAttribute('data-ok') : b.getAttribute('data-fail');
    setTimeout(function () { b.textContent = t0; }, 1800);
  }
  b.addEventListener('click', function () {
    var u = location.href.split('#')[0];
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(u).then(function () { done(true); }, function () { sel(u); });
    } else { sel(u); }
  });
  function sel(u) {
    try {
      var i = document.createElement('input');
      i.value = u; i.setAttribute('readonly', ''); i.style.cssText = 'position:fixed;opacity:0;top:0';
      document.body.appendChild(i); i.select();
      var ok = document.execCommand('copy');
      document.body.removeChild(i); done(ok);
    } catch (e) { done(false); }
  }
})();
