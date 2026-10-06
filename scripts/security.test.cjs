const assert = require('node:assert/strict');
const { createRequire } = require('node:module');
const test = require('node:test');

// Test the qs copy used by Express, including when npm nests the dependency.
const expressRequire = createRequire(require.resolve('express'));
const qs = expressRequire('qs');

test('qs enforces arrayLimit for comma parsing (CVE-2026-2391)', () => {
  assert.throws(
    () => qs.parse('a=' + ','.repeat(25), {
      comma: true,
      arrayLimit: 5,
      throwOnLimitExceeded: true,
    }),
    /Array limit exceeded/,
  );
});
