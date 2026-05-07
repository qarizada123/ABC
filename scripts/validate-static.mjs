import { readFileSync } from 'node:fs';

const requiredFiles = ['index.html', 'src/main.js', 'src/styles.css'];
const contents = Object.fromEntries(
  requiredFiles.map((file) => [file, readFileSync(file, 'utf8')]),
);

const checks = [
  ['index.html mounts React app', contents['index.html'].includes('<div id="root"></div>')],
  ['index.html loads the module app', contents['index.html'].includes('/src/main.js')],
  ['React application renders Quran Global', contents['src/main.js'].includes('Quran Global')],
  ['RTL styling is present', contents['src/styles.css'].includes('direction: rtl')],
];

const failed = checks.filter(([, passed]) => !passed);
if (failed.length) {
  console.error('Static validation failed:');
  for (const [name] of failed) console.error(`- ${name}`);
  process.exit(1);
}

console.log('Static React Quran site validation passed.');
