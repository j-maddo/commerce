describe('Shopping Cart', () => {
  beforeEach(() => cy.visit('/'))
  it('users can add products to the cart', () => {
    cy.getBySel('product-tag').eq(0).click()
    cy.get('[aria-label="Add to Cart"]').click()
    cy.get('[aria-label="Cart items: 1"]').contains('1')
  })
})
