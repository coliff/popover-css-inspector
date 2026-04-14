const fs = require("node:fs");
const path = require("node:path");
const terser = require("terser");

const root = path.join(__dirname, "..");
const pkg = require("../package.json");
const { version, ecmaVersion } = pkg;
const ecma = typeof ecmaVersion === "number" ? ecmaVersion : 2022;

const srcPath = path.join(root, "js", "popover-css-inspector.js");
const outPath = path.join(root, "js", "popover-css-inspector.min.js");

/**
 * Returns source with the license banner `v…` aligned to package.json `version`.
 * Does not read or write the filesystem.
 */
function withSyncedBanner(code) {
  if (!/\*\s*Popover CSS Inspector\s+v[\d\w.-]+/.test(code)) {
    throw new Error(
      `Expected a license banner line matching "* Popover CSS Inspector v…" in ${path.relative(root, srcPath)}`,
    );
  }
  return code.replace(
    /(\*\s*Popover CSS Inspector\s+)v[\d\w.-]+/,
    `$1v${version}`,
  );
}

async function main() {
  const original = fs.readFileSync(srcPath, "utf8");
  const sourceForMinify = withSyncedBanner(original);
  const result = await terser.minify(sourceForMinify, {
    ecma,
    compress: true,
    mangle: true,
    keep_classnames: true,
    keep_fnames: true,
  });
  if (result.error) {
    throw result.error;
  }
  fs.writeFileSync(outPath, result.code);
  if (sourceForMinify !== original) {
    fs.writeFileSync(srcPath, sourceForMinify);
    console.log(
      `Updated banner in ${path.relative(root, srcPath)} to v${version}`,
    );
  }
}

main().catch((failure) => {
  console.error(failure);
  process.exit(1);
});
