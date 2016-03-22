export class WorkshopPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Workshop-app p')).getText(); }
}
