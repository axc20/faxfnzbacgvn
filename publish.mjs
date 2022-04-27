import { execSync } from 'node:child_process';

try {
  execSync('echo --- publish.mjs', { stdio: 'inherit' });

  exec('cd packages/axe && npm publish', { stdio: 'inherit' });
  exec('cd packages/bow && npm publish', { stdio: 'inherit' });
} catch (err) {
  console.log(err);
}
