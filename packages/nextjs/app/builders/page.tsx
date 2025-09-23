import ClientBuilders from "./ClientBuilders";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

type SlugMap = Record<string, string>;

async function buildExistingSlugMap(): Promise<SlugMap> {
  const base = path.join(process.cwd(), "app", "builders");
  let entries: fs.Dirent[] = [];
  try {
    entries = await fs.promises.readdir(base, { withFileTypes: true });
  } catch {
    return {};
  }
  const map: SlugMap = {};
  for (const e of entries) {
    if (!e.isDirectory()) continue;
    const dir = path.join(base, e.name);
    const page = path.join(dir, "page.tsx");
    try {
      await fs.promises.access(page, fs.constants.F_OK);
      map[e.name.toLowerCase()] = e.name;
    } catch {}
  }
  return map;
}

export default async function BuildersPage() {
  const existingSlugMap = await buildExistingSlugMap();
  return <ClientBuilders existingSlugMap={existingSlugMap} />;
}
