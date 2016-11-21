require 'selenium-webdriver'

driver = Selenium::WebDriver.for :chrome

# example 1
driver.navigate.to "http://www.espn.com/college-football/"
elements = driver.find_element(:css, 'div#news-feed-content div.headlines')
puts elements.text

# example 2
driver.navigate.to "http://www.espn.com/"
link = driver.find_element(:link_text, 'NBA')
link.click
page_title = driver.title
puts 'page title is:'
puts page_title

driver.quit