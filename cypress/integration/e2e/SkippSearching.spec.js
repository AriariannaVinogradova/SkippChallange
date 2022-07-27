/// <reference types="cypress" />

describe('yandex test', function() {

    beforeEach(() => {
        cy.visit('/');
    }) 

    it('search skipp', function() {
        cy.searchData('skipp');
        cy.clickFirstResult();
        cy.checkUrl('skipp.pro');
    }) 
})