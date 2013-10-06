
chrome webdriver
================
$> sudo ~/Downloads/selenium-server-standalone-2.35.0.jar -Dwebdriver.chrome.driver="/home/storm/Downloads/chromedriver" -Dhttp.proxyHost=web-proxy.israel.hp.com -Dhttp.proxyPort=8080

$> node selenium chrome

5800


casper-ph antom
==============
$> ~/apps/casper/bin/casperjs test ./casper.js

1500


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




