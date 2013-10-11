var page = require('webpage').create();
var start = new Date().getTime();

page.open("http://bing.com/", function() {
            
            waitFor(function() {
               
               return page.evaluate(function() {
                   return document.querySelector("#sb_form_q")
                  });
             }, function() {
                 page.evaluate(function () {              
                     document.querySelector("#sb_form_q").value="book"        
                     document.querySelector("#sb_form_go").click()                 
                 }); 

                     waitFor(function() {
               
                        return page.evaluate(function() {
                            return document.querySelector("#sb_form_q")
                           });
                      }, function() {
                          
                              var someContent = page.evaluate(function () {
                                   return document.querySelector("#count").textContent;
                               });
                               console.log(someContent)

                              var now = new Date().getTime();
                              console.log('loaded bing in ' + (now - start) + 'ms');
                              start = now;
                              phantom.exit();

                          
                       });   

              });      

         
            
});





function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 3000, //< Default Max Timout is 3s
        start = new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 250); //< repeat check every 250ms
};

