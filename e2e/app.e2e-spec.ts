import { AppPage } from './app.po';

describe('angular-fagkveld App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async() => {
    await page.navigateTo();
    expect(page.getParagraphText()).toEqual('Andeby');
  });

});
