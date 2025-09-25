// require bootstrap.bundle.js loaded before this
(function(){
  let mobileMenu = document.getElementById('mobile-menu');
  if(!mobileMenu) return;
  let bsCollapse = null;

  // lazy-get instance
  function getCollapse() {
    bsCollapse = bsCollapse || bootstrap.Collapse.getOrCreateInstance(mobileMenu);
    return bsCollapse;
  }

  document.querySelectorAll('#mobile-menu .nav-link').forEach(function(link){
    link.addEventListener('click', function(){
      // hide collapse on link click (mobile)
      var c = getCollapse();
      c.hide();
    });
  });
})();
