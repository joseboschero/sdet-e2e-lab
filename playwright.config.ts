import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/playwright",
  reporter: [["html", { open: "never" }], ["list"]],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
});