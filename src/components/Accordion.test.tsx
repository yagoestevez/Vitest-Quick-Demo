import { describe, expect, test } from 'vitest'

describe('Green test', () => {
  test('Should pass', () => {
    expect(1 + 1).toBe(2)
  })
})

describe('Red test', () => {
  test('Should NOT pass', () => {
    expect(1 + 1).toBe(3)
  })
})