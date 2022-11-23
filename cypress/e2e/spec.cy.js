describe("empty spec", () => {
  //kondisi ketika semua inputan benar
  it("passes", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get(".nav-item > .nav-link").click();
    cy.get("#username").type("admin1");
    cy.get("#password").type("admin123");
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(":nth-child(2) > :nth-child(5) > form > .btn-primary").click();
    cy.get("#username").type("rhmwn");
    cy.get(".btn").click();
  });

  //kondisi ketika salah satu inputan ada yang kosong
  it("failed when fill incorrect", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get(".nav-item > .nav-link").click();
    cy.get("#username").type("admin1");
    cy.get("#password").type("admin123");
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(":nth-child(2) > :nth-child(5) > form > .btn-primary").click();

    cy.get("#username").clear();
    cy.get(".btn").click();
    cy.get("#name").clear();
    cy.get(".btn").click();
    cy.get("#email").clear();
    cy.get(".btn").click();
  });

  //kondisi ketika mengubah email tidak sesuai format
  it("failed when email incorrect", () => {
    cy.visit("http://127.0.0.1:8000/");

    cy.get(".nav-item > .nav-link").click();
    cy.get("#username").type("admin1");
    cy.get("#password").type("admin123");
    cy.get(".btn").click();
    cy.get(".btn").click();
    cy.get(":nth-child(2) > :nth-child(5) > form > .btn-primary").click();
    cy.get("#email").clear();
    cy.get("#email").type("adi.com");
    cy.get(".btn").click();
  });
});
