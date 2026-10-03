const express = require("express");
const path = require("path");

const app = express();

// Parse JSON request bodies
app.use(express.json());

// Static middleware - serves public/instruction.html at /instruction.html
app.use(express.static(path.join(__dirname, "public")));

// GET /hello - plain text
app.get("/hello", (req, res) => {
  res.type("text/plain").send("Hello Express JS");
});

// GET /user?firstname=&lastname= - query parameters (defaults: Pritesh Patel)
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST /user/:firstname/:lastname - path parameters
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

// POST /users - body is an array of { firstname, lastname }
app.post("/users", (req, res) => {
  if (!Array.isArray(req.body)) {
    return res
      .status(400)
      .json({ error: "Request body must be a JSON array of users" });
  }
  const users = req.body.map(({ firstname, lastname }) => ({ firstname, lastname }));
  res.json(users);
});

// 404 for anything else
app.use((req, res) => {
  res.status(404).json({ error: `Cannot ${req.method} ${req.originalUrl}` });
});

// Error handler (e.g. malformed JSON body)
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
