var Browser = require("zombie");
var assert = require("assert");


var browser = new Browser()
browser.proxy = "http://web-proxy.israel.hp.com:8080/"

/*
// Load the page from localhost
browser.visit("http://localhost:8080/docs/p.html", function () {

  // Fill email, password and submit form
  browser.
    fill("#num1", "4").
    fill("#num2", "7").
    pressButton("#btn1", function() {      
      var div = browser.document.getElementById("result")
      
      function resultArrived(window) {
        console.log(111)
        return window.document.querySelector("#result").innerHTML!="result";
      }
      browser.wait(resultArrived, function() {
        console.log(div.innerHTML)
      })

    })

});
*/

var start = new Date().getTime();
//browser.debug = true
browser.userAgent = "Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Chrome/9.0.597.98 Safari/534.13"

console.log("before: " + new Date())
browser.visit("http://www.bing.com/", function () {
  console.log("after main page: " + new Date())
  browser.fill("#sb_form_q", "book");
           console.log("after fill: " + new Date())
           
           browser.pressButton("#sb_form_go");
             console.log("after button: " + new Date())
             function resultArrived(window) {
               console.log("in criteria: " + new Date())
               var res = window.document.querySelector("#count")
               //console.log(res)
               return res
             }
             browser.wait(resultArrived, function() {
               console.log("after wait: " + new Date())
               var end = new Date().getTime();
                var time = end - start;
                console.log('Execution time: ' + time);
               console.log(browser.document.querySelector("#count").innerHTML)               
             })

          
 })
 