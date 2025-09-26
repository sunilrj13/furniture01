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


<script>
document.addEventListener('DOMContentLoaded', function() {
  const gridTrack = document.getElementById('testimonialGridTrack');
  const progressBar = document.getElementById('scrollProgress');
  if (!gridTrack || !progressBar) return;

  let progress = 0;
  const animationDuration = 40000; // 40 seconds

  function updateProgress() {
    progress = (progress + 2.5) % 100;
    progressBar.style.width = progress + '%';
  }

  setInterval(updateProgress, 1000);

  gridTrack.addEventListener('animationiteration', () => {
    progress = 0;
    progressBar.style.width = '0%';
  });

  const sliderContainer = gridTrack.closest('.testimonial-grid-slider');
  sliderContainer.addEventListener('mouseenter', () => {
    gridTrack.style.animationPlayState = 'paused';
  });
  sliderContainer.addEventListener('mouseleave', () => {
    gridTrack.style.animationPlayState = 'running';
  });
});
</script>