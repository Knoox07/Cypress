/// <reference types="Cypress"/>
/// Script de Automação do Site DemoQA
/// Created: Rian Barbosa dos Santos
/// Last modificated 2023.07.24

describe('DemoQA Cypress Automation', () => {
    it.only('Access page DemoQA', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://demoqa.com')
    })
  
    it.only('Access o menu elements', () => {
      cy.viewport(1920, 1080)
      cy.visit('https://demoqa.com')
      cy.contains('Elements').click()
    })

    it.only('Access screen "Text Box"', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com')
        cy.contains('Elements').click()
        cy.contains('Text Box').click()
      })

      it.only('fill in data and submit form', () => {
        cy.viewport(1920, 1080)
        cy.visit('https://demoqa.com')
        cy.contains('Elements').click()
        cy.contains('Text Box').click()
        cy.get('[id="userName"]').type('Automação Cypress Web')
        cy.get('[id="userEmail"]').type('emailteste@mail.com')
        //cy.get('#userEmail').type('rianbarbosa35@gmail.com')
        //cy.get('#currentAddress').type('Rua Maria do Santos, Avenida Bairro Novo')
        //cy.get('[id="currentAddress"]').type('Avenida Antônio Cabral de Souza')
        cy.get('#currentAddress').type("Avenida Antônio Cabral de Souza")
        //cy.get('[id="permanentAddress"]').type('Avenida Antônio Cabral de Souza')
        cy.get('#permanentAddress').type("A mesma informação do campo acima")
        cy.get('[id="submit"]').click()
      })
  
  })