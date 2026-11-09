(function(){
  document.querySelectorAll('[data-room-gallery]').forEach(function(gallery){
    var images=gallery.querySelectorAll('[data-room-image]');
    var buttons=gallery.querySelectorAll('[data-room-view]');
    buttons.forEach(function(button){
      button.addEventListener('click',function(){
        var selected=button.getAttribute('data-room-view');
        images.forEach(function(image){image.hidden=image.getAttribute('data-room-image')!==selected;});
        buttons.forEach(function(other){other.setAttribute('aria-pressed',other===button?'true':'false');});
      });
    });
  });
})();
