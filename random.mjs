import { execSync } from 'node:child_process';

try {
  execSync('echo --- random.mjs', { stdio: 'inherit' });
  console.log(Math.random());
} catch (err) {
  console.log(err);
}
