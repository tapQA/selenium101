from selenium import webdriver

caps = {'platform': 'WINDOWS', 'browserName': 'internet explorer', 'version': '11', 'javascriptEnabled': True}
selenium_grid_url = 'http://127.0.0.1:4444/wd/hub'

driver = webdriver.Remote(desired_capabilities=caps,command_executor=selenium_grid_url)

# example 1
driver.get("http://www.espn.com/esports/")
print ('page title is: ', driver.title)
assert "esports News: LoL, Dota 2, Hearthstone - ESPN" in driver.title

# example 2
elem = driver.find_elements_by_css_selector('div.headlines a')
print ('top esports headlines:')
for i in elem:
    print(i.text)

# example 3
driver.get('http://www.espn.com/nhl/team/_/name/min/minnesota-wild')
elem = driver.find_element_by_css_selector('div.span-2 h4')
print ('next MN Wild game is on:')
print (elem.text)

driver.close()
