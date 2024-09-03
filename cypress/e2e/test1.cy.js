describe('describe test spec', () => {  
  it('passes', () => {
    let random = Math.round((Math.random()*1000)%1000)
    cy.log(random)
    let email = "ninnkhos"+random+"@iliauni.edu.ge"
    let numm = "112235436"+random
    let mobile = "112345"+random

    cy.register(email, numm, mobile)
    cy.log("is registered")
  })
})

