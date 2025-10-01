import ClientBuilders from "./ClientBuilders";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";

type SlugMap = Record<string, string>;

export default async function BuildersPage() {
  const manifestPath = path.join(process.cwd(), "app", "_data", "builders.manifest.json");
  const existingSlugMap: SlugMap = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));
  return <ClientBuilders existingSlugMap={existingSlugMap} />;
}
