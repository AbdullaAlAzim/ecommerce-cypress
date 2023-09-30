import { searchPage } from "../pages/searchPage";
import loginData from "../../fixtures/loginData.json"
const seachObj  = new searchPage();

describe("Search field Test", () => {
    before(() => {
    cy.login(loginData.loginWithValidData.email, loginData.loginWithValidData.password);
  });

  it.only("should successfully search", () => {
    
    seachObj.enterSearchKey("Build your own computer");
    seachObj.clickOnContinue();
    cy.get('.product-title > a').should('have.text','Build your own computer');
  });

  
});