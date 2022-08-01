/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable {
    /**
     *  Window object with additional properties used during test.
     */
    window(options?: Partial<Loggable & Timeoutable>): Chainable<CustomWindow>

    getBySel(
      dataTestAttribute: string,
      args?: any
    ): Chainable<JQuery<HTMLElement>>
    getBySelLike(
      dataTestPrefixAttribute: string,
      args?: any
    ): Chainable<Element>
  }
}
