import { describe, expect, it } from 'vitest'
import { firstError, subscribeSchema } from './forms'

describe('subscribeSchema', () => {
  it('accepts a well-formed address and trims it', () => {
    expect(subscribeSchema.parse({ email: '  hello@example.com  ' })).toEqual({
      email: 'hello@example.com',
    })
  })

  it('requires a non-empty address', () => {
    const result = subscribeSchema.safeParse({ email: '   ' })

    expect(result.success).toBe(false)
    if (!result.success) expect(firstError(result.error)).toBe('Email is required')
  })

  it('rejects a malformed address', () => {
    const result = subscribeSchema.safeParse({ email: 'hello@' })

    expect(result.success).toBe(false)
    if (!result.success)
      expect(firstError(result.error)).toBe('Valid email is required: ex@abc.xyz')
  })
})
