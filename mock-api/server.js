import express from "express";
import fs from "node:fs";

const app = express();
app.use(express.json());

const PORT = 3001;

// Carga db.json (simple, suficiente para lab)
const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));

// ✅ GET /api/users con paginación tipo json-server: ?_page=2&_limit=6
app.get("/api/users", (req, res) => {
  const page = Number(req.query._page ?? 1);
  const limit = Number(req.query._limit ?? 6);

  const start = (page - 1) * limit;
  const end = start + limit;

  const users = db.users ?? [];
  return res.status(200).json(users.slice(start, end));
});

// ✅ POST /api/login (imitando ReqRes)
app.post("/api/login", (req, res) => {
  const { email, password } = req.body ?? {};

  if (!email) return res.status(400).json({ error: "Missing email" });
  if (!password) return res.status(400).json({ error: "Missing password" });

  if (email === "eve.holt@reqres.in" && password === "cityslicka") {
    return res.status(200).json({ token: "mock-token-123" });
  }

  return res.status(400).json({ error: "user not found" });
});

app.listen(PORT, () => {
  console.log(`Mock API running on http://localhost:${PORT}`);
  console.log(`GET  users: http://localhost:${PORT}/api/users`);
  console.log(`POST login: http://localhost:${PORT}/api/login`);
});