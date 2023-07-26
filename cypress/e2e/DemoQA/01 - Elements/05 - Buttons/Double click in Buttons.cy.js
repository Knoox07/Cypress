/// <reference types="Cypress"/>
// Script de Automação do Site DemoQA
// Created: Rian Barbosa dos Santos
// Last modificated: 2023.07.25
// Script Status: Developed

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

  it.only('Access Screen "Buttons"', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
    cy.contains('Elements').click()
    cy.contains('Buttons').click()
  })

it.only('Double Click in the Screen Buttons', () => {
  cy.viewport(1920, 1080)
  cy.visit('https://demoqa.com')
  cy.contains('Elements').click()
  cy.contains('Buttons').click()
  cy.get('[id="doubleClickBtn"]').dblclick()
  cy.get('[id="doubleClickMessage"]').should('be.visible', 'You have done a double click')
  })

})