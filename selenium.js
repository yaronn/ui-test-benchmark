var mode = process.argv[2]
var browserName = (mode=="chrome" || mode=="firefox")?mode:"phantomjs"
var remote = process.argv[3]=="remote"

var port = 4444;
if (remote) port = 80
else if (mode=="ghost-rc") port = 9997


var params = {
    hostname: remote?'ondemand.saucelabs.com':'127.0.0.1',
    port: port    
  }


if (remote) {
  params.user = "yaronn01"
  params.pwd = "daa47681-6117-4d8b-a6b7-fe52adc65a58"
}

console.log(params)
console.log(browserName)

var wd = require('wd')  
  , browser = wd.remote(params);


browser.on('status', function(info) {
  console.log(info);
});

browser.on('command', function(meth, path, data) {
  console.log(' > ' + meth, path, data || '');
});

browser.init({
    browserName: browserName
  }, function(err) {    
      if (err) console.log(err)
      var start = new Date().getTime();      
      browser.get("http://www.bing.com", function(err) {
        if (err) console.log(err)
        browser.waitForVisibleById("sb_form_q", 6000, function(err){
          if (err) console.log(err)
          browser.elementById("sb_form_q", function(err, el) {
            if (err) console.log(err)
            el.sendKeys("book", function(err) {
                if (err) console.log(err)
                browser.elementById("sb_form_go", function(err, btn) {
                  btn.click(function() {
                      browser.waitForElementByCssSelector(".sb_count", 6000, function(err){                      
                          browser.elementByCssSelector(".sb_count", function(err, count) {
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