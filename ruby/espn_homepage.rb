require 'selenium-webdriver'

RSpec.describe 'ESPN find Wild scores' do
  before(:example) do
    @driver = Selenium::WebDriver.for :chrome
  end

  after(:example) do
    @driver.quit
  end

  it 'opens the ESPN homepage' do
    @driver.navigate.to 'http://www.espn.com'
    # need to figure out the selector & validation here
    expect(@driver.find_element(:link_text, 'Log in').displayed?).to be true
  end
end