const fs = require("node:fs");
const path = require("node:path");
const terser = require("terser");

const root = path.join(__dirname, "..");
const pkg = require("../package.json");
const { version, ecmaVersion } = pkg;
const ecma = typeof ecmaVersion === "number" ? ecmaVersion : 2022;

const srcPath = path.join(root, "js", "popover-css-inspector.js");
const outPath = path.join(root, "js", "popover-css-inspector.min.js");

function syncBannerVersion() {
  const code = fs.readFileSync(srcPath, "utf8");
  if (!/\*\s*Popover CSS Inspector\s+v[\d\w.-]+/.test(code)) {
    throw new Error(
      `Expected a license banner line matching "* Popover CSS Inspector v…" in ${path.relative(root, srcPath)}`,
    );
  }
  const next = code.replace(
    /(\*\s*Popover CSS Inspector\s+)v[\d\w.-]+/,
    `$1v${version}`,
  );
  if (next === code) {
    return;
  }
  fs.writeFileSync(srcPath, next);
  console.log(
    `Updated banner in ${path.relative(root, srcPath)} to v${version}`,
  );
}

async function minify() {
  const code = fs.readFileSync(srcPath, "utf8");
  const result = await terser.minify(code, {
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
}

async function main() {
  syncBannerVersion();
  await minify();
}

main().catch((failure) => {
  console.error(failure);
  process.exit(1);
});
