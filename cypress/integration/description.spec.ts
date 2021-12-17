describe("click 'purchase' => added product to off canvas cart", () => {
  it("Should now have one of every product added to cart (9 in total)", () => {
    cy.visit("http://localhost:1234/description.html");

    cy.get("ul.cart-item-offcanvas").should("have.length", 9);
  });
});
