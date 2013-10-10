

var page = require("webpage").create();

var start = new Date().getTime();
page.open("http://www.bing.com/")
  .then(function(status){
    slimer.wait(1000)
    page.evaluate(function () {              
        document.querySelector("#sb_form_q").value="book"        
        document.querySelector("#sb_form_go").click()                 
    });    
  })
  .then(function() {
    slimer.wait(1000)
    var someContent = page.evaluate(function () {
        return document.querySelector("#count").textContent;
    });
    console.log(someContent)
    var end = new Date().getTime();
    var time = end - start;
    console.log('Execution time: ' + time);
  })
  .then(function() {
    page.close();
    slimerjs.exit()
  });
  