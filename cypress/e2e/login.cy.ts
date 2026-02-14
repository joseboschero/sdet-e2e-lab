describe("Login - The Internet", () => {
  it("should login successfully", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain.text", "You logged into a secure area!");
  });

  it("should fail login with wrong password", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("wrong-pass");
    cy.get("button[type='submit']").click();
    cy.get("#flash").should("contain.text", "Your password is invalid!");
  });
});