# osmo-tester - Macbook-Online-Store-review

**Overview Macbook Online Store:**

Automation was done using Cypress.  
One test is expected to fail because it's an actual bug (read test logs).  
All automated tests are inside `./cypress/tests/tests.spec.js.` and `./cypress/tests/tests.spec.js.`

**To run tests:**

- checkout this branch
  inside project directory in terminal run:
- `npx cypress run` to run tests in the terminal
  or
- `npx cypress open` to run tests in Cypress UI

The expected result of the test run: 6 tests will pass and 1 (last) test will fail.

**GitHub Actions**

Stack of tests automaticly runing on GitHub Actions after each push or pull request.

**What can be done:**

- more functional and API tests can be added;
- more manual tets can be automated;
- gitHub CI;

**Tests and Bugs:**

**Note:** Given the lack of requirements, some of the tests and bugs were created based on assumptions and  
common sense.

**TESTS:**

| **#** | **Description**                                                           | **Pass/Fail** | **Manual/Autotest** |
| ----- | ------------------------------------------------------------------------- | ------------- | ------------------- |
| 1     | **Registration**                                                          |               |                     |
| 1.1   | New user can be registered using a new email                              | Pass          | Manual              |
| 1.2   | User can't be registered using existing email                             | Pass          | Autotest            |
| 1.3   | New user can't be registered by entering an email without "@"             | Pass          | Manual              |
| 1.4   | New user can't be registered by entering a password fewer than 6 symbols  | Pass          | Manual              |
| 1.5   | _More tests can be added - TBD_                                           |               |                     |
| 2     | **Login**                                                                 |               |                     |
| 2.1   | User can log in using a valid email and password                          | Pass          | Autotest            |
| 2.2   | User can't log in using unregistered login and password                   | Pass          | Manual              |
| 2.3   | User can't log in without filing an email and password                    | Pass          | Manual              |
| 2.4   | _More tests can be added - TBD_                                           |               |                     |
| 3     | **Shopping cart**                                                         |               |                     |
| 3.1   | Product can be added to the shopping cart                                 | Pass          | Autotest            |
| 3.2   | Multiple products can be added to the shopping cart                       | Pass          | Autotest            |
| 3.3   | Product can be removed from the shopping cart                             | Pass          | Autotest            |
| 3.4   | User can increase/reduce the number of items in the cart                  | Pass          | Manual              |
| 3.5   | The shopping cart is cleared after user logged out                        | Pass          | Manual              |
| 3.6   | User can see the last saved items in the shopping cart afterlogin again   | Pass          | Manual              |
| 3.7   | User should not be able to save and pay for goods than there are in stock | Pass          | Manual              |
| 3.8   | The quantity of products in the cart can't be negative                    | Fail (Bug #3) | Autotest            |
| 3.9   | _More tests can be added - TBD_                                           |               |                     |
| 4     | **Checkout**                                                              |               |                     |
| 4.1   | Products can be checkout using the checkout button                        | Pass          | Autotest            |
| 4.2   | _More tests can be added - TBD_                                           |               |                     |
| 5     | **Main**                                                                  |               |                     |
| 5.1   | Products that have 0 in stock can't be added to the shopping cart         | Pass          | Manual              |
| 5.2   | The number of products in stock decreases after checkout                  | Fail (Bug #4) | Manual              |
| 5.3   | Arrangement of elements on the page                                       | Fail (Bug #5) | Manual              |
| 5.4   | _More tests can be added - TBD_                                           |               |                     |
| 6     | **Mobile**                                                                |               |                     |
| 6.1   | Verify that responsive design works as expected                           | Fail (Bug #6) | Manual              |
| 6.2   | _More tests can be added - TBD_                                           |               |                     |

**BUGS:**

| #   | Description                                                                                | Exp. result                                                                                                     | Act. result                                                                |
| --- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| 1   | User can't restore access if email or password are forgot                                  | After entering incorrect data in the login / password fields, the user is able to restore access to the account | There is no option to restore access to the account                        |
| 2   | Not possible to open a product from a shopping card directly                               | After clicking on a product, the page with a description of the product opens                                   | Products are not clickable                                                 |
| 3   | The quantity of product in the cart is possible to change for a negative value             | Error message                                                                                                   | Negative values in quantity can be set                                     |
| 4   | The number of products in stock does not decrease after payment                            | The number of products in stock must be less than before payment                                                | The number of products in stock is not changing                            |
| 5   | "Add to cart" buttons are on the different levels in a grid layout of products             | "Add to cart" buttons should be at the same level                                                               | "Add to cart" buttons are on the different levels                          |
| 6   | The layout in the mobile version of the shopping cart is broken                            | All elements are within the scope of the screen                                                                 | Not all elements are within the scope of the screen                        |
| 7   | Unable to follow a direct link to the page: https://vuejs-shopping-cart.coddeine.com/login | The direct link leads to login page                                                                             | The direct link leads to login pageThe direct link leads to 404 error page |
