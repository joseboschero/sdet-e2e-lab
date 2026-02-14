import { Given, When, Then, Before, After } from "@cucumber/cucumber";
import { chromium, type Browser, type Page, expect } from "@playwright/test";
import { LoginPage } from "../../playwright/pages/LoginPage.js";

let browser: Browser;
let page: Page;
let login: LoginPage;

Before(async () => {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  login = new LoginPage(page);
});

After(async function () {
  if (this.result?.status === "FAILED") {
    await page.screenshot({ path: "bdd-failure.png", fullPage: true });
  }
  await browser.close();
});

Given("I am on the login page", async () => {
  await login.goto();
});

When("I login with valid credentials", async () => {
  await login.login("tomsmith", "SuperSecretPassword!");
});

When("I login with an invalid password", async () => {
  await login.login("tomsmith", "wrong-pass");
});

Then("I should see a success message", async () => {
  await expect(page.locator("#flash")).toContainText("You logged into a secure area!");
});

Then("I should see an error message", async () => {
  await expect(page.locator("#flash")).toContainText("Your password is invalid!");
});