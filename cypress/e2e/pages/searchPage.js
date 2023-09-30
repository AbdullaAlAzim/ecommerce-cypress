export class searchPage {
weblocators = {

    seach: "#small-searchterms",
    searchButton: "#small-search-box-form > .button-1",
 
  };
  

//   openURL() {
//     cy.visit("");
//   }

  enterSearchKey(seach) {
    cy.get(this.weblocators.seach).type(seach);
  }

  clickOnContinue() {
    cy.get(this.weblocators.searchButton).click();
  }
  
}
