/// <reference types="Cypress"/>
/// Script de Automação do Site DemoQA
/// Created: Rian Barbosa dos Santos
/// Last modificated 2023.07.24

describe('DemoQA Cypress Automation', () => {
  it.only('Access page DemoQA', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
  })
  
  it.only('Access menu elements', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
    cy.contains('Elements').click()
  })

  it.only('Access screen "Check Box"', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
    cy.contains('Elements').click()
    cy.contains('Check Box').click()
  })

it.only('Select all options in the Screen', () => {
  cy.viewport(1920, 1080)
  cy.visit('https://demoqa.com')
  cy.contains('Elements').click()
  cy.contains('Check Box').click()
  cy.get('.rct-collapse').click()
  cy.contains('Home').click()
  })

})