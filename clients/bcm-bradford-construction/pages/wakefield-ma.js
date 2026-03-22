/* 
  WAKEFIELD PAGE JS
  Add this via: Elementor > Site Settings > Custom Code > Add New
  Location: Footer (</body>)
  Display Conditions: Singular > Pages > Wakefield
  
  OR: Appearance > Theme File Editor > footer area
  OR: A "Custom Code" plugin like WPCode
*/

(function() {
  var imgs = [];
  var ci = 0;
  var items = document.querySelectorAll('.bcm-wakefield-gallery-item img');
  items.forEach(function(i) { imgs.push(i.src); });
  if (!imgs.length) return;

  /* Gallery click - event delegation */
  document.addEventListener('click', function(e) {
    var item = e.target.closest('.bcm-wakefield-gallery-item');
    if (item && item.dataset.gi !== undefined) {
      ci = parseInt(item.dataset.gi, 10);
      var lb = document.getElementById('bcmLightbox');
      document.getElementById('bcmLBImg').src = imgs[ci];
      document.getElementById('bcmLBCount').textContent = (ci + 1) + ' / ' + imgs.length;
      lb.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });

  /* Lightbox close */
  document.addEventListener('click', function(e) {
    if (e.target.id === 'bcmLBCloseBtn' || e.target.id === 'bcmLightbox') {
      document.getElementById('bcmLightbox').classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  /* Lightbox nav */
  function lbNav(d) {
    ci = (ci + d + imgs.length) % imgs.length;
    document.getElementById('bcmLBImg').src = imgs[ci];
    document.getElementById('bcmLBCount').textContent = (ci + 1) + ' / ' + imgs.length;
  }
  document.addEventListener('click', function(e) {
    if (e.target.id === 'bcmLBPrevBtn') lbNav(-1);
    if (e.target.id === 'bcmLBNextBtn') lbNav(1);
  });

  /* Keyboard nav */
  document.addEventListener('keydown', function(e) {
    var lb = document.getElementById('bcmLightbox');
    if (!lb || !lb.classList.contains('active')) return;
    if (e.key === 'Escape') {
      lb.classList.remove('active');
      document.body.style.overflow = '';
    }
    if (e.key === 'ArrowLeft') lbNav(-1);
    if (e.key === 'ArrowRight') lbNav(1);
  });

  /* Gallery expand/collapse toggle */
  var togBtn = document.getElementById('bcmGalleryToggle');
  if (togBtn) {
    togBtn.addEventListener('click', function() {
      var overflow = document.getElementById('bcmGalleryMore');
      var txt = document.getElementById('bcmToggleText');
      var isExpanded = overflow.classList.contains('expanded');
      if (isExpanded) {
        overflow.classList.remove('expanded');
        togBtn.classList.remove('expanded');
        txt.textContent = 'View All 12 Photos';
        document.getElementById('bcmGallery').scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        overflow.classList.add('expanded');
        togBtn.classList.add('expanded');
        txt.textContent = 'Show Less';
      }
    });
  }
})();
