import { FirstAppPage } from './app.po';

describe('Ivy Load App', () => {
  let page: FirstAppPage;

  beforeEach(() => {
    page = new FirstAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Ivy Load!!');
  });
});
