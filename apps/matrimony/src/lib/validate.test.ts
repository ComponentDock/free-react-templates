import { describe, expect, it } from 'vitest'
import { isEmailValid, isNameValid } from './validate'

describe('isNameValid', () => {
  it('accepts a name with something in it', () => {
    expect(isNameValid('Amias')).toBe(true)
  })

  it('rejects an empty or whitespace-only name', () => {
    expect(isNameValid('')).toBe(false)
    expect(isNameValid('   ')).toBe(false)
  })
})

describe('isEmailValid', () => {
  it('accepts an address with a local part, a domain and a dot', () => {
    expect(isEmailValid('  amias@example.com  ')).toBe(true)
  })

  it('rejects anything that is not an address', () => {
    expect(isEmailValid('amias')).toBe(false)
    expect(isEmailValid('amias@example')).toBe(false)
    expect(isEmailValid('')).toBe(false)
  })
})
