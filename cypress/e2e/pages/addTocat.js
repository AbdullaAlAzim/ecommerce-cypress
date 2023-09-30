///<reference types="cypress" />
export class addTocat {
weblocators = {

    addTocat: ":nth-child(1) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button",
    ram :"#product_attribute_2",
    hdd:"#product_attribute_3_6",
    softwer:"#product_attribute_5_10",
    pbutton:"#add-to-cart-button-1"

  };
  
  AddtoCart() {
    
    
    cy.get(this.weblocators.addTocat).click();
    cy.get(this.weblocators.ram).select('2 GB');
    cy.get(this.weblocators.hdd).check();
    cy.get(this.weblocators.softwer).check();
    cy.get(this.weblocators.pbutton).click();
  }

  
}
