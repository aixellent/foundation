import { FoundationPage } from './app.po';

describe('foundation App', () => {
  let page: FoundationPage;

  beforeEach(() => {
    page = new FoundationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
