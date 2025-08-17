#!/usr/bin/env node

// Simple development server script for Next.js
const { spawn } = require('child_process');

console.log('Starting Sellaro Landing Page with Next.js...');

const nextDev = spawn('npx', ['next', 'dev', '-p', '5000'], {
  stdio: 'inherit',
  shell: true
});

nextDev.on('error', (err) => {
  console.error('Failed to start Next.js:', err);
});

nextDev.on('close', (code) => {
  console.log(`Next.js process exited with code ${code}`);
});