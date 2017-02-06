# User acceptance and regression tests for Raincatcher Demo (raincatcher-demo-uart)

## Run tests

- Run [raincatcher-demo-portal](https://github.com/feedhenry-raincatcher/raincatcher-demo-portal) locally as instructed, you can use [raincatcher-cli](https://github.com/feedhenry-raincatcher/raincatcher-cli) to download all the dependencies and start the portal
- Execute `npm install` to install dependencies
- Execute `grunt uart:local` to run the test suite

## Limitations

- There is no automatic set-up or startup yet. Utility functions for creating test data will eventually be added, as well as a script to run the portal.
- Currently only locally run raincatcher-demo-portal is supported. In case you need to target a portal running on a different URL, add a new environment section to `nightwatch.json`.
- Right now the custom setup we have around jQuery selectors doesn't play well with Nightwatch.js page objects. As a workaround in case you need jQuery selectors, invoke necessary actions directly on the browser object and call `browser.useJQuery()` beforehand as usual.

## Contributing

Please see sample tests in `tests/authentication` to get the idea how to write tests.
To submit new tests or other changes, open a new Pull request.

### Conventions

Use page objects to encapsulate selectors and page actions.
Use/implement `load` command in page objects to check that the page is loaded.
Use/implement `verifyIsDisplayed` command in page objects to provide a way to verify that the user is on the page (has been redirected to the page or hasn't been redirected elsewhere).