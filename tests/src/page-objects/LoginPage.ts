import { config } from "../../../config/wdio.conf";
import Page from "./page";
/**
 * sub page containing specific selectors and methods for a specific page
 */

const SELECTORS = {
  // IOS
  LEARNMORE_BUTTON_IOS: '//XCUIElementTypeButton[@name="LearnMore"]',
  
  // ANDROID
  LEARNMORE_BUTTON_ANDROID: '//android.widget.TextView[@text="LEARN MORE"]]',
  
};

class LoginPage extends Page {
  async learnMore() {
    JSON.parse(JSON.stringify(config.capabilities))[0].platformName === "Android"
      ? (await $(SELECTORS.LEARNMORE_BUTTON_ANDROID).waitForDisplayed({
          timeout: 100000,
        })) && $(SELECTORS.LEARNMORE_BUTTON_ANDROID).touchAction("tap")
      : (await $(SELECTORS.LEARNMORE_BUTTON_IOS).waitForDisplayed({ timeout: 100000 })) 
      && (await $(SELECTORS.LEARNMORE_BUTTON_IOS).touchAction("tap"));
  }

  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open("login");
  }
}

export default new LoginPage();
