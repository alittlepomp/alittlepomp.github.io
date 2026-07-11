document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('nav.site');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function(e){
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  document.addEventListener('click', function(e){
    if (nav.classList.contains('open') && !nav.contains(e.target) && e.target !== toggle){
      nav.classList.remove('open');
    }
  });

  nav.querySelectorAll('a').forEach(function(link){
    link.addEventListener('click', function(){
      nav.classList.remove('open');
    });
  });
});
