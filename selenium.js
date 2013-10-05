var wd = require('wd')  
  , browser = wd.remote();

browser.on('status', function(info) {
  console.log(info);
});

browser.on('command', function(meth, path, data) {
  console.log(' > ' + meth, path, data || '');
});

browser.init({
    browserName:'chrome'    
  }, function() {
      var start = new Date().getTime();
      browser.get("http://www.bing.com", function() {
        browser.waitForVisibleById("sb_form_q", 6000, function(err){
          browser.elementById("sb_form_q", function(err, el) {
            el.sendKeys("book", function(err) {
                browser.elementById("sb_form_go", function(err, btn) {
                  btn.click(function() {
                      browser.waitForVisibleById("count", 6000, function(err){                      
                          browser.elementById("count", function(err, count) {
                            browser.text(count, function(err, value){
                              var end = new Date().getTime();
                              var time = end - start;
                              console.log('Execution time: ' + time);
                              browser.quit();
                              console.log(value)
                            })
                          })
                        
                      })
                  })
                })
            })            
          })  
        })
                
      });

});