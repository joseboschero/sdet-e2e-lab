import { type Page, type Locator, expect } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  readonly username: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly flash: Locator;

  constructor(page: Page) {
    this.page = page;

    
    this.username = page.getByLabel("Username");
    this.password = page.getByLabel("Password");

    
    this.loginButton = page.getByRole("button", { name: "Login" });

    // En esta página demo el mensaje usa un div con id="flash".
    // Si tuviera un role="alert" o data-testid, preferilo.
    this.flash = page.locator("#flash");
  }

  async goto() {
    await this.page.goto("https://the-internet.herokuapp.com/login");
  }

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  async expectFlashContains(text: string) {
    await expect(this.flash).toBeVisible();
    await expect(this.flash).toContainText(text);
  }
}