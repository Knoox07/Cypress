/// <reference types="Cypress"/>
/// Script de Automação
/// Criação: Knox
/// Ultima Atualização - 20-07-2023

describe('Acessar Site da Amazon', () => {
  it.only('Acessar Site da Amazon', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.amazon.com.br');
  })

  it.only('Pesquisar Produto', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.amazon.com.br');
    cy.get('[id="twotabsearchtextbox"]').type('xbox series s');
    cy.get('[id="nav-search-submit-button"]').click();
  })

  it.only('Ordenar produto pelo menor preço', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.amazon.com.br');
    cy.get('[id="twotabsearchtextbox"]').type('xbox series s');
    cy.get('[id="nav-search-submit-button"]').click();
    cy.get('[id="a-autoid-0-announce"]').click();
    cy.get('[id="s-result-sort-select_1"]').click();
  })

  it.only('Ordenar produto "Em destaque"', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.amazon.com.br');
    cy.get('[id="twotabsearchtextbox"]').type('xbox series s');
    cy.get('[id="nav-search-submit-button"]').click();
    cy.get('[id="a-autoid-0-announce"]').click();
    cy.get('[id="s-result-sort-select_0"]').click();
  })

  it.only('Adicionar Produto ao carrinho', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.amazon.com.br');
    cy.get('[id="twotabsearchtextbox"]').type('xbox series s');
    cy.get('[id="nav-search-submit-button"]').click();
    cy.get('[id="a-autoid-0-announce"]').click();
    cy.get('[id="s-result-sort-select_0"]').click();
    cy.contains('Console Microsoft Xbox Series X Premium Edition').click();
    cy.get('[id="add-to-cart-button"]').click();
  })

  it.only('Adicionar Produto ao carrinho e Finalizar compra', () => {
    cy.viewport(1920, 1080);
    cy.visit('https://www.amazon.com.br');
    cy.get('[id="twotabsearchtextbox"]').type('xbox series s');
    cy.get('[id="nav-search-submit-button"]').click();
    cy.get('[id="a-autoid-0-announce"]').click();
    cy.get('[id="s-result-sort-select_0"]').click();
    cy.contains('Console Microsoft Xbox Series X Premium Edition').click();
    cy.get('[id="add-to-cart-button"]').click();
    cy.get('[data-feature-id="proceed-to-checkout-action"]').click();
  })

})