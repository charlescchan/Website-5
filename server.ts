import 'dotenv/config';
import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  const CONTENT_FILE = path.join(__dirname, 'public', 'content.json');

  // GET content
  app.get("/api/content", (req, res) => {
    try {
      if (fs.existsSync(CONTENT_FILE)) {
        const data = fs.readFileSync(CONTENT_FILE, 'utf8');
        res.json(JSON.parse(data));
      } else {
        res.json({});
      }
    } catch (error) {
      console.error("Error reading content file:", error);
      res.status(500).json({ error: "Failed to read content" });
    }
  });

  // POST content (protected)
  app.post("/api/content", (req, res) => {
    const { content, password } = req.body;
    
    // Simple password check (in a real app, use environment variables)
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== ADMIN_PASSWORD) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    try {
      // Ensure data directory exists
      const dir = path.dirname(CONTENT_FILE);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(CONTENT_FILE, JSON.stringify(content, null, 2));
      res.json({ success: true });
    } catch (error) {
      console.error("Error writing content file:", error);
      res.status(500).json({ error: "Failed to save content" });
    }
  });

  // Login check
  app.post("/api/login", (req, res) => {
    const { password } = req.body;
    const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
    
    if (password === ADMIN_PASSWORD) {
      res.json({ success: true });
    } else {
      res.status(401).json({ error: "Invalid password" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.join(__dirname, 'dist');
    if (fs.existsSync(distPath)) {
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
