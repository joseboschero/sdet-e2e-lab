import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

test("login successful", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login("tomsmith", "SuperSecretPassword!");
  await login.expectFlashContains("You logged into a secure area!");
});

test("login fails with wrong password", async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();
  await login.login("tomsmith", "wrong-pass");
  await login.expectFlashContains("Your password is invalid!");
});