import { describe, expect, it } from 'vitest'
import { EMAIL_PATTERN, fieldErrors, getUpdatesSchema } from './forms'

describe('getUpdatesSchema', () => {
  it('accepts a name plus a well-formed e-mail', () => {
    const result = getUpdatesSchema.safeParse({ name: 'Ada', email: 'ada@example.com' })

    expect(result.success).toBe(true)
  })

  it('requires the name', () => {
    const result = getUpdatesSchema.safeParse({ name: '   ', email: 'ada@example.com' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({ name: 'Name is required' })
  })

  it('requires an e-mail', () => {
    const result = getUpdatesSchema.safeParse({ name: 'Ada', email: '' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({ email: 'Email is required: ex@abc.xyz' })
  })

  it('checks the e-mail against the design pattern', () => {
    expect(EMAIL_PATTERN.test('ada@example.com')).toBe(true)
    expect(EMAIL_PATTERN.test('ada@example')).toBe(false)

    const result = getUpdatesSchema.safeParse({ name: 'Ada', email: 'ada@example' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({ email: 'Email is required: ex@abc.xyz' })
  })

  it('raises one message per field', () => {
    const result = getUpdatesSchema.safeParse({ name: '', email: '' })

    expect(result.success).toBe(false)
    expect(fieldErrors(result.error!)).toEqual({
      name: 'Name is required',
      email: 'Email is required: ex@abc.xyz',
    })
  })
})
