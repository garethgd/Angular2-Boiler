import { AngularWhiskeyPage } from './app.po';

describe('angular-whiskey App', function() {
  let page: AngularWhiskeyPage;

  beforeEach(() => {
    page = new AngularWhiskeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
