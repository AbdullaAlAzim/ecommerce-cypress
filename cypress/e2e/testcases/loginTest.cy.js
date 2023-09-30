import { loginPage } from "../pages/loginPage";
import loginData from "../../fixtures/loginData.json"
const loginObj = new loginPage();

describe("Login form Test", () => {
  it("should successfully register with valid credentials", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginData.loginWithValidData.email);
    loginObj.enterPassword(loginData.loginWithValidData.password);
    loginObj.clickOnContinue();
    cy.get('.topic-block-title > h2').should('have.text', 'Welcome to our store');
   
  });

  it("should display error message for invalid credentials", () => {
    loginObj.openURL();
    loginObj.enterEmail(loginData.loginWithinValidData.email);
    loginObj.enterPassword(loginData.loginWithinValidData.password);
    loginObj.clickOnContinue();
    cy.get('.message-error').should('contain', 'Login was unsuccessful. Please correct the errors');
    
  });
});


