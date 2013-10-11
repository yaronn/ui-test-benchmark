/*
var casper = require('casper').create({
    pageSettings: {
        loadImages: false,
        loadPlugins: false
    }
});
*/

casper.userAgent("Mozilla/5.0 (X11; U; Linux i686; en-US) AppleWebKit/534.13 (KHTML, like Gecko) Chrome/9.0.597.98 Safari/534.13");

casper.test.begin('bing search', 2, function(test) {   
    var start = new Date().getTime();
    casper.start('http://www.bing.com/', function() {                
        
        this.waitUntilVisible('#sb_form_q', function() { 
              this.sendKeys('#sb_form_q', "book", true);
              this.click('#sb_form_go');

              
              this.waitUntilVisible('#count', function() {                          
                  var val = this.evaluate(function() {
                     return document.getElementById('count').textContent                     
                  });
                  console.log(val)
                  var end = new Date().getTime();
                  var time = end - start;
                  console.log('Execution time: ' + time);
              });
           });
      
        
    }).run(function() {
        test.done();
    });
});

/*

casper.test.begin('test page', 2, function(test) {
    console.log("koo")
    casper.start('http://localhost:8080/docs/p.html', function() {             
       console.log("zoo")       
       this.evaluate(function() {
         return document.getElementById('num1').value=7
       });

       this.click('#btn1');       
       
       casper.waitFor(function check() {
          return this.evaluate(function() {
              return document.getElementById('result').innerText!="result";
          });
       }, function then() {
             var x = this.evaluate( function() {
               return document.getElementById("result").innerText
             });
            console.log(x)   
       });

    }).run(function() {
        test.done();
    });
 })
 */