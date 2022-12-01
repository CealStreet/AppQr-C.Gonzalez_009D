import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  async getTitleText():Promise<string>{
    return element(by.css('app-root h1')).getText();
  }

  async getTitleTextH2():Promise<string>{
    return element(by.css('app-root h2')).getText();
 }
 async getTitleTextPar():Promise<string>{
  return element(by.css('app-root .par')).getText();
}
}
