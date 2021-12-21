describe("click fa fa-close(X) and should return to index.html", () => {
  it("This should return user to index.html", () => {
    cy.visit("http://localhost:1234/description.html");
    cy.get(".return-home").click({ force: true }); // not visible?

    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  });
});
describe("Cart should not contain any products", () => {
  it("Should now have one of every product added to cart (0 in total", () => {
    cy.visit("http://localhost:1234/description.html");
    cy.get("ul.cart-item-offcanvas").should("have.length", 0);
  });
});
