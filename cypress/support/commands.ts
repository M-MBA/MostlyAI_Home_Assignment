import SELECTORS from "./selectors";

Cypress.on("uncaught:exception", (err) => {
  console.error("Uncaught exception:", err.message);
  return false;
});
Cypress.Commands.add("acceptCookies", () => {
  cy.get(SELECTORS.HEADER_CENTER).rightclick();
  cy.get(SELECTORS.COOKIE_ACCEPT_BUTTON)
    .first()
    .should("be.visible")
    .click();
});

Cypress.Commands.add("getByRelativeSel", (parent, child) => {
  const compoundSelector = `${parent} ${child}`;
  return cy.get(`${compoundSelector}`);
});
Cypress.Commands.add("getByCompoundSel", (compound1, compound2) => {
  const compoundSelector = `${compound1}${compound2}`;
  return cy.get(`${compoundSelector}`);
});
