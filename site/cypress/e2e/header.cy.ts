describe('Header', () => {
  beforeEach(() => cy.visit('/'))

  it('links to the correct pages', () => {
    cy.visit('/')
    cy.getBySel('logo').click()
    cy.location('pathname').should('eq', '/')

    cy.getBySel('nav-link-search').click()
    cy.location('pathname').should('eq', '/search')

    cy.getBySel('nav-link-home-page').click()
    cy.location('pathname').should('eq', '/search/frontpage')
  })

  it.only('the search bar returns the correct search results', () => {
    /**
     * This search component is actually in the DOM twice, one for desktop and one for mobile. By using .eq(0) we are grabbing the one for desktop.
     */
    cy.getBySel('search-input').eq(0).type('CPU{enter}')
    cy.get('[data-test="product-tag"]')
      .eq(0)
      //  Scopes all subsequent cy commands to within this element.
      //  Since we know that the product name and price are children of the "product tag" we can limit the scope in which Cypress looks to find these elements.
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'CPU shirt')
        cy.get('[data-test="product-price"]').should('contain', '$15.00')
      })
  })
})
export {}
