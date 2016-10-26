var webdriver = require('selenium-webdriver'),
    by = webdriver.By,
    until = webdriver.until,
    driver;

describe('Check ESPN for the last Wild game\'s score', function() {

    before(function() {
		driver = new webdriver()
					.Builder()
					.forBrowser('chrome')
					.build();
    });

    it('Goes to espn.com', function () {

    });

    it('Clicks the NHL button in the top navigation banner', function () {

    });

    it('Click the Scores button in the NHL navigation banner', function () {

    });

    it('Searches for the Wild game', function () {

    });


}; 
