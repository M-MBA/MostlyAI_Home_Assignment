import HomePage from "../Page/HomePage";

describe("Mostly AI Website Test", () => {
  let user;
  beforeEach(() => {
    cy.fixture("TestData.json").then((fixtureData) => {
      user = fixtureData;
      cy.visit("/");
      cy.url().should("eq", Cypress.config().baseUrl);
      cy.acceptCookies();
    });
  });

  it("C1: Verify that the bookmarks are displayed", () => {
    HomePage.getLeftHeaderElement(user.HomePage.bookmarks[0]).should(
      "be.visible",
    );

    HomePage.getLeftHeaderElement(user.HomePage.bookmarks[1]).should(
      "be.visible",
    );
    HomePage.getLeftHeaderElement(user.HomePage.bookmarks[2]).should(
      "be.visible",
    );
    HomePage.getLeftHeaderElement(user.HomePage.bookmarks[3]).should(
      "be.visible",
    );
    HomePage.getLeftHeaderElement(user.HomePage.bookmarks[4]).should(
      "be.visible",
    );
  });

  it("C2: Verify that the user can get no result message when searching wrong spelling", () => {
    HomePage.searchElement(user.HomePage.searchedText);
    HomePage.getSearchResultMessage().should(
      "have.text",
      user.HomePage.searchResultText,
    );
    HomePage.getSearchedText().should("have.text", user.HomePage.searchedText);
  });

  it("C3: Verify that the user can send contact form successfully", () => {
    HomePage.hoverHeaderElements(user.HomePage.bookmarks[3]);
    HomePage.getSendMessageText(user.ContactUs.sendMessageText).should(
      "be.visible",
    );
    HomePage.clickContactUs(user.HomePage.companyOverviewList[2]);
    HomePage.getPopUpTitle(user.ContactUs.popUpTitle).should("be.visible");
    HomePage.fillContactForm(user.ContactUs.formData);
    HomePage.clickCheckbox();
    HomePage.clickSendMessageButton();
    HomePage.isSuccessMessageDisplayed(
      user.ContactUs.sendMessageSuccessMessage,
    ).should("be.visible");
    cy.request("GET", user.ContactUs.successForm).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
