describe('Header', () => {
  it('links to the correct pages', () => {
    cy.visit('/')
    cy.getBySel('logo').click()
    cy.location('pathname').should('eq', '/')

    cy.getBySel('nav-link-search').click()
    cy.location('pathname').should('eq', '/search')

    cy.getBySel('nav-link-home-page').click()
    cy.location('pathname').should('eq', '/search/frontpage')
  })
})
