import SELECTORS from "../../support/selectors";

class HomePage {
  static searchElement(input: string) {
    cy.get(SELECTORS.SEARCH_ICON).click();
    cy.get(SELECTORS.SEARCH_FIELD).should("be.visible");
    cy.get(SELECTORS.SEARCH_FIELD).type(input);
    cy.get(SELECTORS.SEARCH_FIELD).type("{enter}");
  }

  static getSearchResultMessage() {
    return cy.getByCompoundSel(
      SELECTORS.H1,
      SELECTORS.HEADLINE,
    );
  }
  static getSearchedText() {
    return cy.getByCompoundSel(
      SELECTORS.H1,
      SELECTORS.CODE_BLOCK,
    );
  }
  static hoverHeaderElements(element) {
    HomePage.getLeftHeaderElement(element).trigger("mouseover");
  }

  static clickContactUs(companyOverviewList) {
    cy.getByCompoundSel(
      SELECTORS.CT_LINK,
      SELECTORS.MEMU_ITEM_AREA,
    )
      .contains(companyOverviewList)
      .should("be.visible")
      .click();
  }

  static getSendMessageText(sendMessageText) {
    return cy
      .getByCompoundSel(
        SELECTORS.CT_LINK,
        SELECTORS.MEMU_ITEM_AREA,
      )
      .contains(sendMessageText);
  }

  static getPopUpTitle(askText) {
    return cy
      .getByCompoundSel(
        SELECTORS.CT_DIV_BLOCK,
        SELECTORS.HAS_BOX_SHADOW,
      )
      .find(SELECTORS.H2)
      .contains(askText);
  }

  static fillContactForm(formData) {
    cy.getByCompoundSel(
      SELECTORS.CT_DIV_BLOCK,
      SELECTORS.HAS_BOX_SHADOW,
    )
      .find(SELECTORS.H2)
      .trigger("mouseover");
    cy.getByCompoundSel(
      SELECTORS.CT_DIV_BLOCK,
      SELECTORS.HAS_BOX_SHADOW,
    )
      .find(SELECTORS.H2)
      .dblclick();
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.FIRST_NAME,
    ).type(formData[0]);
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.LAST_NAME,
    ).type(formData[1]);
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.EMAIL,
    ).type(formData[2]);
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.MOBILE_PHONE,
    ).type(formData[3]);
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.COMPANY,
    ).type(formData[4]);
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.COUNTRY,
    ).select(formData[5]);
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.HOW_HEAR,
    ).type(formData[5]);
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.MESSAGE,
    ).type(formData[6]);
  }

  static clickCheckbox() {
    cy.getByRelativeSel(
      SELECTORS.HS_FORM_PRIVATE,
      SELECTORS.HS_FORM_CHECKBOX,
    ).click();
  }

  static clickSendMessageButton() {
    cy.get(SELECTORS.BTN_BLOCK).click();
  }

  static isSuccessMessageDisplayed(sendMessageSuccessMessage) {
    return cy
      .get(SELECTORS.SUBMITTED_MESSAGE)
      .contains(sendMessageSuccessMessage);
  }

  static getLeftHeaderElement(element: string) {
    return cy
      .getByRelativeSel(
        SELECTORS.HEADER_LEFT,
        SELECTORS.OXY_MEGA_DROPDOWN_LINK_TEXT,
      )
      .contains(element);
  }
}
export default HomePage;
