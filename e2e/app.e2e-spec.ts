import { ProvectusAppPage } from './app.po';

describe('provectus-app App', () => {
  let page: ProvectusAppPage;

  beforeEach(() => {
    page = new ProvectusAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
