/* eslint-disable wdio/await-expect */
import { setupBrowser } from '@testing-library/webdriverio';
import { WebdriverIOQueries } from '@testing-library/webdriverio/dist/types';

describe('application loading', () => {
  let screen: WebdriverIOQueries;

  before(() => {
    screen = setupBrowser(browser);
  });

  // Cover a few WebdriverIO expect matchers -  https://webdriver.io/docs/api/expect-webdriverio

  describe('DOM', () => {
    it.skip('should determine when an element is in the document', async () => {
      expect(await screen.getByTestId('disabled-checkbox')).not.toExist();
    });

    it('should determine when an element is not in the document', async () => {
      expect(await screen.queryByTestId('not-there')).toExist();
    });

    it('should determine when an element is visible', async () => {
      expect(await screen.getByTestId('disabled-checkbox')).not.toBeDisplayed();
    });

    it('should determine when an element is not visible', async () => {
      expect(await screen.getByTestId('hidden-textarea')).toBeDisplayed();
    });
  });
});
