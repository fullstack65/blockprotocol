import chalk from "chalk";
import * as envalid from "envalid";
import fs from "fs-extra";
import path from "node:path";

const monorepoRoot = path.resolve(__dirname, "../..");

const script = async () => {
  console.log(chalk.bold("Copying blocks to CI cache..."));

  const env = envalid.cleanEnv(process.env, {
    BLOCKS_DIR: envalid.str({
      desc: "location of built blocks that are ready to be served",
      default: path.resolve(monorepoRoot, "site/public/blocks"),
    }),
    BLOCKS_CI_CACHE_DIR: envalid.str({
      desc: "Location of blocks in CI cache",
      default: path.resolve(monorepoRoot, "site/.next/cache/blocks"),
    }),
  });

  const resolvedBlocksDir = path.resolve(monorepoRoot, env.BLOCKS_DIR);
  const resolvedBlocksCiCacheDir = path.resolve(
    monorepoRoot,
    env.BLOCKS_CI_CACHE_DIR,
  );

  await fs.ensureDir(path.dirname(resolvedBlocksCiCacheDir));

  await fs.copy(resolvedBlocksDir, resolvedBlocksCiCacheDir, {
    recursive: true,
  });

  console.log("Done.");
};

export default script();