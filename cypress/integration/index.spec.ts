describe("click 'purchase' => added product to off canvas cart", () => {
  it("This should click on all .purchase-button & add one of every product to cart (9 in total)", () => {
    cy.visit("http://localhost:1234");
    cy.get(" .purchase-button").click({ multiple: true, force: true });
  });

  it("Should now have one of every product added to cart (12 in total)", () => {
    cy.get("ul.cart-item-offcanvas").should("have.length", 12);
  });
});

//Can't find ciiiV? Vad betyder det?
describe("click 'purchase' => added product to off canvas cart", () => {
  it("This should click on all .info-button & redirect to confirmation.html ( 12 in total)", () => {
    cy.visit("http://localhost:1234");
    cy.get(".info-button").click({ multiple: true, force: true });
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
  it("Should now have one of every product added to cart (0 in total)", () => {
    cy.get("ul.cart-item-offcanvas").should("have.length", 0);
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});

/* describe("click 'spotify' === opened spotify link", () => {
  it("This should click on all .listen-button and open spotify in browser", () => {
    cy.visit("http://localhost:1234");

    cy.get(" .listen-button").click({ multiple: true, force: true });
  });
});
 */
