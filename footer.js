(function(){
  var tabs=document.querySelectorAll('.maptabs button'),frame=document.getElementById('map-frame'),open=document.getElementById('map-open');
  if(!tabs.length||!frame)return;
  tabs.forEach(function(b){
    b.addEventListener('click',function(){
      tabs.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
      var q=b.getAttribute('data-q');
      frame.src='https://www.google.com/maps?q='+encodeURIComponent(q)+'&output=embed';
      frame.title='Map: '+b.textContent;
      if(open)open.href='https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(q);
    });
  });
})();
