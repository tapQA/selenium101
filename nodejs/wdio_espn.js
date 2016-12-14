var webdriverio = require('webdriverio'),
    should = require('should'),
	client;

describe('Check ESPN for the last team the Wild played', function() {
	
	this.timeout(0);

    client = webdriverio.remote({desiredCapabilities: {browserName: 'chrome', host: 'localhost', port: '9515', platform: 'windows'}});
    
    before(function () {	
        return client.init();
    });

    after(function () {
        return client.end();
    })

    it('Goes to espn.com NHL section', function () {

    	return client
                .url('http://www.espn.com/nhl/')
                .getTitle().then(function (title) {
                    title.should.equal("NHL - National Hockey League Teams, Scores, Stats, News, Standings, Rumors - ESPN");
                });
    });

    it('Go to the Wild team page', function () {

        return client
                .url('http://www.espn.com/nhl/team/_/name/min/minnesota-wild')
                .getText('.positioning .link-text').then(function (text) {
                    text.should.equal('NHL');
                })      
    });

    it('Last team the Wild played', function () {
        
        return client
                .getText('.span-1 .mod-game.prev .city').then(function (text) {
                    console.log("Last team: ", text);
                })
    });

}); 
