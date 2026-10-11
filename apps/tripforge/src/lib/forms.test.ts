import { describe, expect, it } from 'vitest'
import { fieldErrors, newsletterSchema } from './forms'

describe('newsletterSchema', () => {
  it('accepts a valid email address and trims surrounding spaces', () => {
    const parsed = newsletterSchema.safeParse({ email: '  guest@example.com  ' })
    expect(parsed.success).toBe(true)
    if (!parsed.success) throw new Error('expected a valid email')
    expect(parsed.data.email).toBe('guest@example.com')
  })

  it('rejects an empty or malformed address', () => {
    for (const email of ['', '   ', 'guest@', 'nope']) {
      const parsed = newsletterSchema.safeParse({ email })
      expect(parsed.success).toBe(false)
    }
  })
})

describe('fieldErrors', () => {
  it('maps zod issues onto the field name', () => {
    const parsed = newsletterSchema.safeParse({ email: 'nope' })
    expect(parsed.success).toBe(false)
    if (parsed.success) throw new Error('expected a validation failure')
    expect(fieldErrors<'email'>(parsed.error)).toEqual({
      email: 'Please enter a valid email address',
    })
  })
})
