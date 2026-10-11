import { describe, expect, it } from 'vitest'
import { EMAIL_PATTERN, fieldErrors, subscribeSchema } from './forms'

describe('subscribeSchema', () => {
  it('accepts a well-formed e-mail', () => {
    const result = subscribeSchema.safeParse({ email: 'ada@example.com' })

    expect(result.success).toBe(true)
  })

  it('requires an e-mail', () => {
    const result = subscribeSchema.safeParse({ email: '   ' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({
      email: 'Valid email is required: ex@abc.xyz',
    })
  })

  it('checks the e-mail against the design pattern', () => {
    expect(EMAIL_PATTERN.test('ada@example.com')).toBe(true)
    expect(EMAIL_PATTERN.test('ada@example')).toBe(false)

    const result = subscribeSchema.safeParse({ email: 'ada@example' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({
      email: 'Valid email is required: ex@abc.xyz',
    })
  })

  it('keeps a single message per field', () => {
    const result = subscribeSchema.safeParse({ email: 'nope' })

    expect(result.success).toBe(false)
    expect(Object.keys(fieldErrors(result.error!))).toEqual(['email'])
  })
})
