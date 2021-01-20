/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance();

describe('Cadastro de usuário', () => {
    it('Cadastro de um novo usuário', () => {
        cy.visit('/')
        cy.get('.login').click()
        var chance_email = chance.email()
        cy.get('#email_create').type(chance_email)
        cy.get('#SubmitCreate').click()

        cy.get('#id_gender1').check()
        cy.get('#customer_firstname').type(chance.first())
        cy.get('#customer_lastname').type(chance.last())
        cy.get('#email').should('have.value', chance_email)
        cy.get('#passwd').type(chance.string({ length: 5 }))
        cy.get('#days').select('10')
        cy.get('#months').select(chance.month())
        cy.get('#years').select(chance.year({min: 1990, max: 1995}))

        cy.get('#address1').type(chance.address())
        cy.get('#city').type(chance.city())
        cy.get('#id_country').select('21')
        cy.get('#id_state')
            .select('1')
            .should('contain.text', 'Alabama')
        cy.get('#postcode').type(chance.zip())
        cy.get('#phone_mobile').type(chance.phone())
        cy.get('#alias').type(chance_email).clear()
        cy.get('#alias').type(chance_email)

        cy.get('#submitAccount').click();

        cy.url().should('contain', 'my-account')

        cy.get('.info-account').should('contain.text', 'Welcome to your account')
    });
});