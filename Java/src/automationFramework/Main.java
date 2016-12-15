package automationFramework;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Main {

	/**
	 * @This is a simple Selenium example using java
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		// setup driver
		WebDriver driver;
		System.setProperty("webdriver.chrome.driver",
				"Resources/chromedriver.exe");
		driver = new ChromeDriver();

		// navigate to gmail.com
		driver.navigate().to("http://www.gmail.com");

		// Email field selector
		WebElement emailField = driver.findElement(By
				.cssSelector("input[id='Email']"));

		// next button selector
		WebElement nextButton = driver.findElement(By
				.cssSelector("input[id='next']"));

		// error message selector
		WebElement errorMessage = driver.findElement(By
				.cssSelector("span[id='errormsg_0_Email']"));

		// Type the following keys into the email field
		emailField.sendKeys("Gmail@gmail.com");

		// click next button
		nextButton.click();

		// wait until the error message is visable
		WebDriverWait wait = new WebDriverWait(driver, 10);
		WebElement element = wait.until(ExpectedConditions
				.visibilityOfElementLocated(By
						.cssSelector("span[id='errormsg_0_Email']")));

			assert errorMessage.getText().equals(
					"Sorry, Google doesn't recognize that email.");
		// if the error message displayed doesn't match the string throw a

	}
}
