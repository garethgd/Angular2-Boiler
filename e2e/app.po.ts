import { browser, element, by } from 'protractor';

export class AngularWhiskeyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
