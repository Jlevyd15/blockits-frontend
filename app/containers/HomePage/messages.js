/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.components.HomePage.header',
    defaultMessage: 'Crypto Dashboard',
  },
    headerSubtext: {
    id: 'app.components.AccountInfo.headerSubtext',
    defaultMessage: 'dashboard',
  },
   hello: {
    id: 'app.components.AccountInfo.hello',
    defaultMessage: 'Hello there!',
  },
  learn: {
    id: 'app.components.AccountInfo.learn',
    defaultMessage: 'Learn how to auto import your GDAX account.',
  },
});
