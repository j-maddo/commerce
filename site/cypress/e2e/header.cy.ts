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

  it('the search bar returns the correct search results', () => {
    /**
     * This search component is actually in the DOM twice, one for desktop and one for mobile. By using .eq(0) we are grabbing the one for desktop.
     */
    cy.getBySel('search-input').eq(0).type('CPU{enter}')
  })
})
export {}
