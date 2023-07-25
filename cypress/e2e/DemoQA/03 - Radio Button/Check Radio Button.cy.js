/// <reference types="Cypress"/>
/// Script de Automação do Site DemoQA
/// Created: Rian Barbosa dos Santos
/// Last modificated 2023.07.24

describe('DemoQA Cypress Automation', () => {
  it.only('Access page DemoQA', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
  })
  
  it.only('Access the menu elements', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
    cy.contains('Elements').click()
  })

  it.only('Access Screen "Radio Button"', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
    cy.contains('Elements').click()
    cy.contains('Radio Button').click()
  })

it.only('Select option "Yes" in the Screen', () => {
  cy.viewport(1920, 1080)
  cy.visit('https://demoqa.com')
  cy.contains('Elements').click()
  cy.contains('Radio Button').click()
  cy.get(':nth-child(2) > .custom-control-label').click()
  })

})