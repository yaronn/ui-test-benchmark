Time
====

/usr/bin/time --v [command]



chrome webdriver
================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -Dwebdriver.chrome.driver="/home/storm/Downloads/chromedriver" -Dhttp.proxyHost=web-proxy.israel.hp.com -Dhttp.proxyPort=8080

$> node selenium chrome

flow: 5500
full: 10500


chrome webdriver grid
=====================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -role hub

$> java -jar ~/Downloads/selenium-server-standalone-2.35.0.jar -role webdriver -hub http://localhost:4444/grid/register -browser browserName="chrome",version=ANY,platform=WINDOWS,maxInstances=5 -Dwebdriver.chrome.driver="/home/storm/Downloads/chromedriver"

$> node selenium chrome

flow: 6500
full: 11500


firefox webdriver
================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar

$> node selenium firefox

flow: 9900
full: 19500

firefox webdriver grid
======================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -role hub

$> java -jar ~/Downloads/selenium-server-standalone-2.35.0.jar -role webdriver -hub http://localhost:4444/grid/register -browser browserName="firefox",version=ANY,platform=WINDOWS

$> node selenium firefox

flow: 9500
full: 22500


firefox - headless - Xvfb
=========================

Instructions are from [here](http://www.installationpage.com/selenium/how-to-run-selenium-headless-firefox-in-ubuntu/)
Make sure xvfb is installed:

$> sudo apt-get install xvfb

Now in a new terminal start the xvfb server:

sudo Xvfb :10 -ac

Now in the terminal where we want to run selenium server run this:

$> export DISPLAY=:10

Run selenium server:

$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar

Run script in another terminal:

$> node selenium firefox


flow: 8000
full: 20000


phantom
=======
$> phantomjs phantom.js

flow: 2200
full: 2900


casper-phantom
==============
$> ~/apps/casper/bin/casperjs test ./casper.js

flow: 1350
full: 2200



zombie
======
$> node zombie

flow: 7500
full: 9800



phantomdriver hub
=================
(works only behin proxy?)

$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -role hub -Dhttp.proxyHost=web-proxy.israel.hp.com -Dhttp.proxyPort=8080

$> phantomjs --webdriver=8080 --webdriver-selenium-grid-hub=http://127.0.0.1:4444

$> node selenium ghost-driver

flow: 3000
full: 4000

 
phantomdriver remote control
============================
$> phantomjs --webdriver=9997

$> node selenium ghost-rc

flow: 2300
full: 3300



spooky-casper-phantom
======================
$> PATH=$PATH:~/apps/casper/bin

$> node spooky

flow: 1950
full: 3100



casper - slimerjs
=================
$> PATH=$PATH:~/apps/slimerjs-0.8.3  

$> ~/apps/casper/bin/casperjs test ./casper.js --engine=slimerjs

flow: 2800
full: 5800


slimerjs
=========
$> slimerjs slimer.js

flow: 3300
full: 6300

chrome saucelabs
=================
$> node selenium chrome remote

flow: 14000
full: 24000

firefox saucelabs
=================
$> node selenium firefox remote

flow: 12000
full: 25000
