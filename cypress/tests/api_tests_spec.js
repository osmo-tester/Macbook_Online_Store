

beforeEach(() => {
  cy.visit('/');
})

describe('API tests', ()=>{
  it.only('Status 200', () =>{
    cy.request("https://vuejs-shopping-cart.coddeine.com/").then((result) => {
      expect(result).to.have.property("status", 200)
    })
  })
  it.only('Status 200', () =>{
    cy.request("https://vuejs-shopping-cart.coddeine.com/").then((result) => {
      expect(result).to.have.property("status", 300)
    })
  })
})
