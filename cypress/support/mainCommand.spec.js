/// <reference types="cypress" />

import {locators as locators} from './locators/mainLocators'

Cypress.Commands.add('searchData', (data) => {
  cy.get(locators.searchField).type(`${data}{enter}`)
})

Cypress.Commands.add('clickFirstResult', () => {
  cy.get(locators.resultTitle).eq(0).invoke('removeAttr', 'target').click()
})

Cypress.Commands.add('checkUrl', (url) => {
  cy.url().should('contain', url)
})