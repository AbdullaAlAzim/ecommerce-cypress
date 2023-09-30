// import { searchPage } from "../pages/searchPage";
// import loginData from "../../fixtures/loginData.json"
// const seachObj  = new searchPage();

import { addTocat } from "../pages/addTocat";
import loginData from "../../fixtures/loginData.json";
const addtocartObj  = new addTocat();

describe("Search field Test", () => {
    before(() => {
    cy.login(loginData.loginWithValidData.email, loginData.loginWithValidData.password);
  });

  it.only("should successfully add to cart", () => {
    
    addtocartObj.AddtoCart();
    cy.get('.content').should('have.text','The product has been added to your shopping cart');
  });

  
});