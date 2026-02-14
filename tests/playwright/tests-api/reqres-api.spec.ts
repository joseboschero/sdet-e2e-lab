import { test, expect } from "@playwright/test";

const BASE_URL = "http://localhost:3001/api";

test("GET users (mock api)", async ({ request }) => {
  const res = await request.get(`${BASE_URL}/users`);
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(Array.isArray(body)).toBe(true);
  expect(body.length).toBeGreaterThan(0);
});

test("API login success (mock)", async ({ request }) => {
  const res = await request.post(`${BASE_URL}/login`, {
    data: { email: "eve.holt@reqres.in", password: "cityslicka" },
  });

  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body.token).toBeTruthy();
});

test("API login fail - missing password (mock)", async ({ request }) => {
  const res = await request.post(`${BASE_URL}/login`, {
    data: { email: "eve.holt@reqres.in" },
  });

  expect(res.status()).toBe(400);
  const body = await res.json();
  expect(body.error).toContain("Missing password");
});

test("GET users page 2 (mock)", async ({ request }) => {
  const res = await request.get(`${BASE_URL}/users?_page=2&_limit=6`);
  expect(res.status()).toBe(200);

  const body = await res.json();
  expect(Array.isArray(body)).toBe(true);


  for (const u of body) {
    expect(typeof u.id).toBe("number");
    expect(typeof u.email).toBe("string");
  }
});