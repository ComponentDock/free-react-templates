import { describe, expect, it } from 'vitest'
import { EMAIL_PATTERN, fieldErrors, notifySchema } from './forms'

describe('notifySchema', () => {
  it('accepts a well-formed e-mail', () => {
    expect(notifySchema.safeParse({ email: 'ada@example.com' }).success).toBe(true)
  })

  it('trims surrounding whitespace before checking', () => {
    const result = notifySchema.safeParse({ email: '  ada@example.com  ' })

    expect(result.success).toBe(true)
  })

  it('rejects an empty value with the design\u2019s own message', () => {
    const result = notifySchema.safeParse({ email: '' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({ email: 'Email is required: ex@abc.xyz' })
  })

  it('rejects a malformed value', () => {
    for (const value of ['ada', 'ada@example', 'ada @example.com', '@example.com']) {
      expect(EMAIL_PATTERN.test(value)).toBe(false)
      expect(notifySchema.safeParse({ email: value }).success).toBe(false)
    }
  })

  it('keeps exactly one message per field', () => {
    const result = notifySchema.safeParse({ email: 'nope' })

    expect(fieldErrors(result.error!).email).toBe('Email is required: ex@abc.xyz')
  })
})
