const tap = require('tap')
const posixTruthy = require('../build/posix-truthy')
const posixFalsey = require('../build/posix-falsey')
const windowsTruthy = require('../build/windows-truthy')
const windowsFalsey = require('../build/windows-falsey')
const envVarTruthy = require('../build/env-var-truthy')
const envVarFalsey = require('../build/env-var-falsey')
const localVarTruthy = require('../build/local-var-truthy')
const localVarFalsey = require('../build/local-var-falsey')


tap.test('comment blocks with falsey predicate (POSIX EOL)', (test) => {
  test.equal(posixFalsey, 1)
  test.end()
})

tap.test('dont comment blocks with truthy predicate (POSIX EOL)', (test) => {
  test.equal(posixTruthy, 2)
  test.end()
})

tap.test('comment blocks with falsey predicate (Windows EOL)', (test) => {
  test.equal(windowsFalsey, 1)
  test.end()
})

tap.test('dont comment blocks with truthy predicate (Windows EOL', (test) => {
  test.equal(windowsTruthy, 2)
  test.end()
})

tap.test('dont comment env var blocks with truthy predicate', (test) => {
  test.equal(envVarTruthy, 2)
  test.end()
})

tap.test('comment env var blocks with falsey predicate', (test) => {
  test.equal(envVarFalsey, 1)
  test.end()
})

tap.test('comment env var blocks with falsey predicate', (test) => {
  test.equal(localVarFalsey, true)
  test.end()
})

tap.test('comment env var blocks with falsey predicate', (test) => {
  test.equal(localVarTruthy, true)
  test.end()
})

