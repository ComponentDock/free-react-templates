import { describe, expect, it } from 'vitest'
import { fieldErrors, initialSubscribe, subscribeSchema } from './forms'

describe('forms', () => {
  it('starts with an empty email', () => {
    expect(initialSubscribe).toEqual({ email: '' })
  })

  it('rejects an empty email with the required message', () => {
    const result = subscribeSchema.safeParse({ email: '' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).email).toBe('Please enter your email')
    }
  })

  it('rejects a malformed email with the format message', () => {
    const result = subscribeSchema.safeParse({ email: 'not-an-email' })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).email).toBe('Please enter a valid email')
    }
  })

  it('accepts a valid email', () => {
    const result = subscribeSchema.safeParse({ email: 'valid@example.com' })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.email).toBe('valid@example.com')
    }
  })
})
