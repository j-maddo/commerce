describe('Header', () => {
  it('links to the correct pages', () => {
    cy.visit('/')
    cy.get('[data-test="logo"]').click()
    cy.location('pathname').should('eq', '/')
  })
})
