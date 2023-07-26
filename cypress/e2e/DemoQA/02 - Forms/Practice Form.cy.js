/// <reference types="Cypress"/>
// Script de Automação do Site DemoQA
// Created: Rian Barbosa dos Santos
// Last modificated: 2023.07.25
// Script Status: Finish

describe('DemoQA Cypress Automation', () => {
    it.only('Practice Form', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://demoqa.com')
    cy.contains('Forms').click()
    cy.contains('Practice Form').click()
    cy.get('[id="firstName"]').type('Teste')
    cy.get('[id="lastName"]').type('Cypress')
    cy.get('[id="userEmail"]').type('name@example.com')
    // cy.get('[id="gender-radio-2"]').check()
    // cy.get('[id="userNumber"]').type("81999224565")
    cy.get('#userNumber').type("999224565")
    cy.get('[id="dateOfBirthInput"]').click()
    // cy.get('[id="doubleClickMessage"]').should('be.visible', 'You have done a double click')
    })
  
  })