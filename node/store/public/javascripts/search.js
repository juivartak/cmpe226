<script>
  document.write('<script src=' +
  ('__proto__' in {} ? 'js/vendor/zepto' : 'js/vendor/jquery') +
  '.js><\/script>')
  </script>
 
function search() {
console.log("inside loop");
var query = document.getElementById('searchString').value;
console.log(query);
request = $.ajax({url:'/result', type:'POST', data:query});
request.done(function(msg) {
    window.location.href = "/result";
  });
}

