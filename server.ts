import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production serving with caching
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve assets with long-term caching (1 year)
    // Vite uses /assets path for fingerprinted files (js, css)
    app.use("/assets", express.static(path.join(distPath, "assets"), {
      maxAge: "1y",
      immutable: true,
    }));

    // Serve other static files (images, etc) with a decent cache time (1 day)
    app.use(express.static(distPath, {
      maxAge: "1d",
      setHeaders: (res, filePath) => {
        // Specific caching for images if needed
        if (filePath.match(/\.(png|jpg|jpeg|gif|svg|webp|ico)$/)) {
          res.setHeader("Cache-Control", "public, max-age=86400"); // 1 day
        }
      }
    }));

    // Fallback to index.html for SPA routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
