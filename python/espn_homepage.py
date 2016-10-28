from selenium import webdriver
#from selenium.webdriver.common.keys import Keys

driver = webdriver.Firefox()
driver.get("http://www.espn.com/esports/")
assert "esports News: LoL, Dota, Hearthstone" in driver.title
elem = driver.find_element_by_class("headlines")

driver.close()