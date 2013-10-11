
chrome webdriver
================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -Dwebdriver.chrome.driver="/home/storm/Downloads/chromedriver" -Dhttp.proxyHost=web-proxy.israel.hp.com -Dhttp.proxyPort=8080

$> node selenium chrome

5800


chrome webdriver grid
=====================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -role hub
$> java -jar ~/Downloads/selenium-server-standalone-2.35.0.jar -role webdriver -hub http://localhost:4444/grid/register -browser browserName="chrome",version=ANY,platform=WINDOWS,maxInstances=5 -Dwebdriver.chrome.driver="/home/storm/Downloads/chromedriver"

6500-8500


firefox webdriver
================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar

$> node selenium firefox

8000

chrome webdriver grid
=====================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -role hub
$> java -jar ~/Downloads/selenium-server-standalone-2.35.0.jar -role webdriver -hub http://localhost:4444/grid/register -browser browserName="firefox",version=ANY,platform=WINDOWS

7200-9400

phantom
=======
$> phantomjs phantom.js

2300


casper-phantom
==============
$> ~/apps/casper/bin/casperjs test ./casper.js

1100-1500


zombie
======
$> node zombie

7500

phantomdriver hub
=================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -role hub -Dhttp.proxyHost=web-proxy.israel.hp.com -Dhttp.proxyPort=8080

$> phantomjs --webdriver=8080 --webdriver-selenium-grid-hub=http://127.0.0.1:4444

$> node selenium ghost-driver

2600

 
phantomdriver remote control
============================
$> phantomjs --webdriver=9997

$> node selenium ghost-rc

2600


spooky-casper-phantom
======================
$> PATH=$PATH:~/apps/casper/bin

$> node spooky

2200


casper - slimerjs
=================
$> PATH=$PATH:~/apps/slimerjs-0.8.3  
$> ~/apps/casper/bin/casperjs test ./casper.js --engine=slimerjs

2800


slimerjs
=========
$> slimerjs slimer.js

2900

chrome saucelabs
=================
$> node selenium chrome remote
11000-13000

firefox saucelabs
=================
$> node selenium firefox remote
8900-11500
