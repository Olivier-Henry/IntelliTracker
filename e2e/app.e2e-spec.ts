import { AngularElectronPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('First install', () => {
  let page: AngularElectronPage;

  beforeEach(() => {
    page = new AngularElectronPage();
  });

  /* it('should display message saying App works !', () => {
    expect(element(by.css('app-home h1')).getText()).toMatch('App works !');
  }); */
  it('should panel first install is visible', () => {
    expect(element(by.tagName('app-first-install')).isDisplayed()).toBeTruthy();
  });

});
