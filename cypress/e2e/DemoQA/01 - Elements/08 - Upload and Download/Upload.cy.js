/// <reference types="Cypress"/>
// Script de Automação do Site DemoQA
// Created: Rian Barbosa dos Santos
// Last modificated: 2023.07.25
// Script Status: Finish

describe('DemoQA Cypress Automation', () => {
  // it.only('Access page DemoQA', () => {
  //   cy.viewport(1920, 1080)
  //   cy.visit('https://demoqa.com')
  // })
  
  // it.only('Access the menu elements', () => {
  //   cy.viewport(1920, 1080)
  //   cy.visit('https://demoqa.com')
  //   cy.contains('Elements').click()
  // })

  // it.only('Access Screen "Links"', () => {
  //   cy.viewport(1920, 1080)
  //   cy.visit('https://demoqa.com')
  //   cy.contains('Elements').click()
  //   cy.contains('Links').click()
  // })

it.only('File upload', () => {
  cy.viewport(1920, 1080)
  cy.visit('https://demoqa.com')
  cy.contains('Elements').click()
  cy.contains('Upload and Download').click()
  cy.get('[id="uploadFile"]').click()
  cy.get('input[type="file"]')
    .selectFile('C:/Users/Rian Barbosa/OneDrive/Documentos/Automações/Cypress/cypress/downloads/sampleFile.jpeg')
  // cy.get('[id="doubleClickMessage"]').should('be.visible', 'You have done a double click')
  })

})