import fs from "fs";
import path from "path";

const base = path.join(process.cwd(), "app", "builders");
const manifestPath = path.join(process.cwd(), "app", "_data", "builders.manifest.json");

async function generate() {
  let entries: fs.Dirent[] = [];
  try {
    entries = await fs.promises.readdir(base, { withFileTypes: true });
  } catch {
    entries = [];
  }
  const map: Record<string, string> = {};
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const dir = path.join(base, e.name);
    const page = path.join(dir, "page.tsx");
    try {
      await fs.promises.access(page, fs.constants.F_OK);
      map[e.name.toLowerCase()] = e.name;
    } catch {}
  }
  fs.mkdirSync(path.dirname(manifestPath), { recursive: true });
  fs.writeFileSync(manifestPath, JSON.stringify(map, null, 2));
}

generate();
