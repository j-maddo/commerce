describe('Home Page', () => {
  it('displays both products on the home page', () => {
    cy.visit('/')
    cy.get('[data-test="product-tag"]')
      .eq(0)
      //  Scopes all subsequent cy commands to within this element.
      //  Since we know that the product name and price are children of the "product tag" we can limit the scope in which Cypress looks to find these elements.
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'CPU shirt')
        cy.get('[data-test="product-price"]').should('contain', '$15.00')
      })
    cy.get('[data-test="product-tag"]')
      .eq(1)
      //  Scopes all subsequent cy commands to within this element.
      //  Since we know that the product name and price are children of the "product tag" we can limit the scope in which Cypress looks to find these elements.
      .within(() => {
        cy.get('[data-test="product-name"]').should(
          'contain',
          'Binary Tree shirt'
        )
        cy.get('[data-test="product-price"]').should('contain', '$15.00')
      })
  })
})
