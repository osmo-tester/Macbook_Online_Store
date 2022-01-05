export class CheckoutPage {
  
  checkProductIsInCart(productName) {
  cy.get('[data-th="Product"]')
    .contains(productName)
    .should('be.visible');
  }

  checkProductIsNotInCart(productName) {
    cy.get('[data-th="Product"]')
      .contains(productName)
      .should('not.exist');
  }

  checkoutCart() {
    cy.get('#cart')
    .contains('Checkout')
    .click();
  }

  removeProduct() {
    cy.get('.fa-trash-o')
    .first()
    .click();
  }
}

export const onCheckoutPage = new CheckoutPage();
