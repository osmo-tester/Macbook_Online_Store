const username = Cypress.env('username')
const password = Cypress.env('password')

export class LoginPage {
  
  login() {
    cy.contains('Login').click();
    cy.get('#email').type(username);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
  }

  registerNewUser() {
    cy.contains('Login').click();
    cy.contains('Register').click();
    cy.get('#email').type(username);
    cy.get('#password').type(password);
    cy.get('[type="submit"]').click();
  }
}

export const onLoginPage = new LoginPage();
