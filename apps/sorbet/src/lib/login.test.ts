import { describe, it, expect } from 'vitest'
import { fieldErrors, loginSchema } from './login'

describe('loginSchema', () => {
  it('accepts complete credentials with the terms accepted', () => {
    const result = loginSchema.safeParse({ username: 'sorbet', password: 's3cret', terms: true })

    expect(result.success).toBe(true)
  })

  it('rejects blank credentials and unaccepted terms', () => {
    const result = loginSchema.safeParse({ username: '  ', password: '', terms: false })

    expect(result.success).toBe(false)
  })
})

describe('fieldErrors', () => {
  it('maps every issue onto its field name', () => {
    const result = loginSchema.safeParse({ username: '', password: '', terms: false })
    const errors = fieldErrors(result.error!)

    expect(errors).toEqual({
      username: 'Please enter your username',
      password: 'Please enter your password',
      terms: 'Please accept the terms and conditions',
    })
  })
})
