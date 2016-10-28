var webdriver = require('selenium-webdriver'),
    by = webdriver.By,
    until = webdriver.until,
    driver;

describe('Check ESPN for the last Wild game\'s score', function() {

    before(function() {
		driver = new webdriver()
					.Builder()
					.forBrowser('firefox')
					.build();
    });

    it('Goes to espn.com', function () {

        driver.get('http://www.espn.com');

    });

    it('Clicks the NHL button in the top navigation banner', function () {

        driver.click(by.className('menu-nhl'));
    });

    it('Click the Scores button in the NHL navigation banner', function () {

        driver.click(by.linkText('Scores'));
    });

    it('Searches for the Wild game', function () {

        driver.
    });


}; 
