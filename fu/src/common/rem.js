// (function(d, w) {
//   const doc = d.documentElement;
//   function rem() {
//     const width = Math.min(doc.getBoundingClientRect().width, 768);
//     doc.style.fontSize = width / 7.5 + 'px';
//   }
//   rem();
//   w.addEventListener('resize', rem);
// })(document, window);
(function(){
  var currClientWidth, fontValue, originWidth;
  originWidth = 750;//ui设计稿的宽度，一般750或640
  __resize();
  window.addEventListener('resize', __resize, false);
  function __resize() {
    currClientWidth = document.documentElement.clientWidth;
    if (currClientWidth > 768){
      currClientWidth = 768;
    } 
    if (currClientWidth < 320){
      currClientWidth = 320;
    }
    fontValue = ((625 * currClientWidth) / originWidth).toFixed(2);
    document.documentElement.style.fontSize = fontValue + '%';
  }
})();
