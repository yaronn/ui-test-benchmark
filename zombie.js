var Browser = require("zombie");
var assert = require("assert");

// Load the page from localhost
browser = new Browser()
browser.visit("http://localhost:8080/docs/p.html", function () {

  // Fill email, password and submit form
  browser.
    fill("#num1", "4").
    fill("#num2", "7").
    pressButton("#btn1", function() {      
      var div = browser.document.getElementById("result")
      
      function resultArrived(window) {
        return window.document.querySelector("#result").innerHTML!="result";
      }
      browser.wait(resultArrived, function() {
        console.log(div.innerHTML)
      })

    })

});
