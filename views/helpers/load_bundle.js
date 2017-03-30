(function(src) {
  if (cutsTheMustard) {
    var o = document.createElement('script');
    o.async = o.defer = true;
    o.src = src;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(o, s);
  }
}('bundle.js'));
