Cypress.Commands.add("register", () =>{
    cy.visit('https://testzootopia.loremipsum.ge/ka')
    let random = Math.round((Math.random()*1000)%1000)
cy.log(random)

cy.get('.rprof > p').click()
cy.get('.input-shablon > p > a').click()
cy.get(':nth-child(1) > .ismile').type("nino khositashvili")
cy.get('.ipir').type("112235436"+random)
cy.get(':nth-child(2) > .imail').type("ninnkhos"+random+"@iliauni.edu.ge")
cy.get(':nth-child(4) > .itel').type("112345"+random)
cy.get(':nth-child(5) > .ipass').type("paroli111")
cy.get('.reg-form-left > :nth-child(6) > .ipass').type("paroli111")
cy.get('[for="profile2"]').click()
cy.get("label:nth-child(2) > svg:nth-child(1) > g:nth-child(1) > rect:nth-child(1)").click({force: true})
cy.get('.regsub').click()
}) 