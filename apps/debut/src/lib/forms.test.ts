import { describe, expect, it } from 'vitest'
import { fieldErrors, subscribeSchema } from './forms'

describe('subscribeSchema', () => {
  it('accepts a name and a valid email address', () => {
    const result = subscribeSchema.safeParse({
      name: 'Ada Lovelace',
      email: 'ada@example.com',
    })

    if (!result.success) throw new Error('expected the values to be accepted')
    expect(result.data).toEqual({ name: 'Ada Lovelace', email: 'ada@example.com' })
  })

  it('trims the submitted values', () => {
    const result = subscribeSchema.safeParse({ name: '  Ada  ', email: ' a@b.co ' })

    if (!result.success) throw new Error('expected the values to be accepted')
    expect(result.data).toEqual({ name: 'Ada', email: 'a@b.co' })
  })

  it('rejects an empty name and a malformed email', () => {
    const result = subscribeSchema.safeParse({ name: '', email: 'nope' })

    expect(result.success).toBe(false)
  })
})

describe('fieldErrors', () => {
  it('maps issues onto their field names', () => {
    const result = subscribeSchema.safeParse({ name: '', email: 'nope' })

    if (result.success) throw new Error('expected the values to be rejected')
    const errors = fieldErrors(result.error)

    expect(errors.name).toBe('Name is required')
    expect(errors.email).toMatch(/^Email is required/)
  })
})
