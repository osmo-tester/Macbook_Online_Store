import { onLoginPage } from "../support/page_objects/loginPage"
import { onMainPage } from "../support/page_objects/mainPage"
import { onCheckoutPage } from "../support/page_objects/checkoutPage"

beforeEach(() => {
  cy.visit('/');
})

describe('API tests', ()=>{
    it('the site is opening with status 200', () =>{
      cy.request("https://vuejs-shopping-cart.coddeine.com/").then((result) => {
        expect(result).to.have.property("status", 200)
      })
    })
  })

describe('Registration', () => {
    it("tests duplicated email can't be registered", () => {
      onLoginPage.registerNewUser();
      cy.contains('The email address is already in use by another account.')
        .should('be.visible');
      })
    })  


describe('Login', () => {
    it('tests that user can login with valid credentials', () => {
      onLoginPage.login();
      cy.contains('Logout').should('be.visible');
      })
    })  

describe('Registration', () => {
    it("Tests duplicated email can't be registered", () => {
      onLoginPage.logout();
      onLoginPage.registerNewUser();
      cy.contains('The email address is already in use by another account.')
        .should('be.visible');
      })
    })
   
describe('Shopping cart/Checkout', () => {
    it('tests that product can be added to the cart', () => {
      onMainPage.addProductToCart("macbook Retina 13.3' ME662 (2013)");
      onMainPage.openCart();
      onCheckoutPage.checkProductIsInCart("macbook Retina 13.3' ME662 (2013)");
    })

    it('test that the shopping cart is cleared after user logged out', ()=>{
      onLoginPage.login();
      onMainPage.addProductToCart("macbook Retina 13.3' ME662 (2013)");
      cy.contains('.btn', 'Checkout').should('contain', '1 ($ 2399)');
      cy.wait(5000);
      onLoginPage.logout();
      cy.contains('.btn', 'Checkout').should('contain', '0 ($ 0)');
    })

    it('tests that multipple products can be added to the cart', () => {
      onMainPage.addProductToCart("macbook Retina 13.3' ME662 (2013)");
      onMainPage.addProductToCart("Macbook Pro 13.3' Retina MF841LL/A");
      onMainPage.openCart();
      onCheckoutPage.checkProductIsInCart("macbook Retina 13.3' ME662 (2013)");
      onCheckoutPage.checkProductIsInCart("Macbook Pro 13.3' Retina MF841LL/A");
    })

    it('tests that product can be removed from cart', () => {
      onMainPage.addProductToCart("macbook Retina 13.3' ME662 (2013)");
      onMainPage.openCart();
      onCheckoutPage.checkProductIsInCart("macbook Retina 13.3' ME662 (2013)");
      onCheckoutPage.removeProduct();
      onCheckoutPage.checkProductIsNotInCart("macbook Retina 13.3' ME662 (2013)");
    })

    it('tests that order can be succesfully checkout', () => {
      onLoginPage.login();
      onMainPage.addProductToCart("macbook Retina 13.3' ME662 (2013)");
      onMainPage.openCart();
      onCheckoutPage.checkoutCart();
      cy.contains('Your order has been successfully processed!').should('be.visible');
    })

    it("tests that quantity of products can't be negative", () => {
      cy.log('This is a BUG and test is expected to fail');
      onLoginPage.login();
      onMainPage.addProductToCart("macbook Retina 13.3' ME662 (2013)");
      onMainPage.openCart();
      cy.get('input').clear().type('-1');
      cy.get('input').should('not.have.value', '-1');
    })
  })

