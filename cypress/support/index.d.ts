declare namespace Cypress {
  interface Chainable<> {
    acceptCookies(): Chainable<void>;
    getByRelativeSel(
      parent: string,
      child: string,
    ): Chainable<JQuery<HTMLInputElement>>;
    getByCompoundSel(
      compound1: string,
      compound2: string,
    ): Chainable<JQuery<HTMLInputElement>>;
  }
}
