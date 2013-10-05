

function add(a, b, cba) {
      var oReq = new XMLHttpRequest();
      oReq.onload = function() {
         var val = JSON.parse(this.responseText)
         cba(null, val.res)
      }
      oReq.open("get", "/add/"+a+"/"+b, true);
      oReq.send();   
}

window.onload = function() {
   document.getElementById("btn1").onclick = function()
   {   
      add(document.getElementById("num1").value, document.getElementById("num2").value, function(err, res1) {
         add(res1+2, 5, function(err, res2) {
            document.getElementById("result").innerHTML = res2;
         })
      })
   }
}