require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome

# example 1
driver.navigate.to "http://www.espn.com/college-football/"
puts "top college football headlines"
elements = driver.find_element(:css, 'div#news-feed-content div.headlines')
puts elements

# example 2
driver.navigate.to "http://www.espn.com/"
driver.click(:link_text, 'NBA')

driver.quit