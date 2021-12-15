/* describe("todo list tests", () => {
    it("this should add something to the todo-list", () => {
      //Arrange - Förbered
      cy.visit("http://localhost:1234");
  
      cy.get("input#todo-input-field").type("hej");
      cy.get("button#add-todo").click();
      cy.get("button#sort-todos");
      cy.get("ul li").should("have.length", 4);
      //Act - Gör något
      cy.get("ul li:first .remove-todo p.remove-todo-paragraph").click();
      cy.get("p:first.check-todo-paragraph").click();
  
      cy.get("button#sort-todos").click();
      //Assert - Verifiera
      cy.get("ul li").should("have.length", 3);
    });
  });

   */
/* describe("click 'purchase' => added to off canvas cart", () => {
  it("This should click on all .purchase-button & add one of every product to cart (9 in total)", () => {
    cy.visit("http://localhost:1234");
    cy.get(" .purchase-button").click({ multiple: true, force: true });
    cy.get("ul.cart-item-offcanvas").should("have.length", 9);

    describe("click 'more info' => redirects to description.html", () => {
      it("This should click on all .info-button & redirect to desc");
    });
  });
});

describe("click 'more info' => redirects to description.html"); */

describe("click 'purchase' => added product to off canvas cart", () => {
  it("This should click on all .purchase-button & add one of every product to cart (9 in total)", () => {
    cy.visit("http://localhost:1234");
    cy.get(" .purchase-button").click({ multiple: true, force: true });
  });

  it("Should now have one of every product added to cart (9 in total)", () => {
    cy.get("ul.cart-item-offcanvas").should("have.length", 9);
  });
});

describe("click 'purchase' => added product to off canvas cart", () => {
  it("This should click on all .purchase-button & add one of every product to cart (9 in total)", () => {
    cy.visit("http://localhost:1234");
    cy.get(" .purchase-button").click({ multiple: true, force: true });
  });
  it("This should click on all .info-button & redirect to confirmation.html ( 9 in total)", () => {
    cy.get(" .info-button").click({ multiple: true, force: true });
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
  });
});
