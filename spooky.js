
function spooky(port) {

        var Spooky = require('spooky');

        var start;

        var spooky = new Spooky({
                child: {
                    transport: 'http',
                    port: port
                },
                casper: {
                    logLevel: 'debug',
                    verbose: true
                }
            }, function (err) {
                if (err) {
                    e = new Error('Failed to initialize SpookyJS');
                    e.details = err;
                    throw e;
                }

            spooky.emit("start")
            spooky.start('http://www.bing.com/', function() {                        
                this.waitUntilVisible('#sb_form_q', function() { 
                      this.sendKeys('#sb_form_q', "book", true);
                      this.click('#sb_form_go');
                      
                      this.waitUntilVisible('#count', function() {        
                          var val = this.evaluate(function() {
                             return document.getElementById('count').innerText
                          });

                          this.emit("end")        
                          console.log(val)                  
                      });
                   });
              
                
            })

            spooky.then(function () {
                this.exit(0);
            });

            spooky.run(function() {

            });


         });

        spooky.on('start', function() {
            start = new Date().getTime();
        })

        spooky.on('end', function () {    
            var end = new Date().getTime();
            var time = end - start;
            console.log('Execution time: ' + time);
        });


        spooky.on('error', function (e, stack) {
            console.error(e);

            if (stack) {
                console.log(stack);
            }
        });


        spooky.on('console', function (line) {
            console.log(line);
        });


        spooky.on('hello', function (greeting) {
            console.log(greeting);
        });

        spooky.on('log', function (log) {
            if (log.space === 'remote') {
                console.log(log.message.replace(/ \- .*/, ''));
            }
        });
}

for (var i=0; i<20; i++) {
    spooky(9091 + i)
}
