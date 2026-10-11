import { describe, expect, it } from 'vitest'
import { EMAIL_PATTERN, fieldErrors, newsletterSchema } from './forms'

describe('newsletterSchema', () => {
  it('accepts a name plus a well-formed e-mail', () => {
    const result = newsletterSchema.safeParse({ name: 'Ada', email: 'ada@example.com' })

    expect(result.success).toBe(true)
  })

  it('requires the name', () => {
    const result = newsletterSchema.safeParse({ name: '   ', email: 'ada@example.com' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({ name: 'Name is required' })
  })

  it('requires an e-mail', () => {
    const result = newsletterSchema.safeParse({ name: 'Ada', email: '' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({ email: 'Valid email is required: ex@abc.xyz' })
  })

  it('checks the e-mail against the design pattern', () => {
    expect(EMAIL_PATTERN.test('ada@example.com')).toBe(true)
    expect(EMAIL_PATTERN.test('ada@example')).toBe(false)

    const result = newsletterSchema.safeParse({ name: 'Ada', email: 'ada@example' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({ email: 'Valid email is required: ex@abc.xyz' })
  })

  it('raises one message per field', () => {
    const result = newsletterSchema.safeParse({ name: '', email: '' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({
      name: 'Name is required',
      email: 'Valid email is required: ex@abc.xyz',
    })
  })
})
