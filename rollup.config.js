import json from '@rollup/plugin-json'

export default {
  input: 'dist/src/main.js',
  output: {
    file: 'index.js',
    format: 'cjs',
    strict: false,
    banner: '#! /usr/bin/env node\n',
    preferConst: true,
  },
  plugins: [json()],
  // external: ['child_process', 'fs', 'path', 'os', 'https', 'readline', 'zlib', 'events', 'stream', 'util', 'buffer'],
}
