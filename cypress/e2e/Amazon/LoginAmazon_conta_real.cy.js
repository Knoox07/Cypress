/// <reference types="Cypress"/>
/// Script de Automação
/// Criação: Knox
/// Ultima Atualização - 20-07-2023


describe('Acessar Site da Amazon', () => {
  it('Acessar Site da Amazon', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.amazon.com.br');
  })
})