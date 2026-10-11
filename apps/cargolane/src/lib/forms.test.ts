import { describe, expect, it } from 'vitest'
import { contactSchema, fieldErrors, newsletterSchema } from './forms'

describe('forms', () => {
  it('rejects empty required contact fields with per-field messages', () => {
    const result = contactSchema.safeParse({
      firstName: ' ',
      lastName: '',
      email: 'nope',
      subject: '',
      message: '',
    })
    expect(result.success).toBe(false)
    if (result.success) return
    const errors = fieldErrors<string>(result.error)
    expect(errors.firstName).toBe('Please enter your first name')
    expect(errors.lastName).toBe('Please enter your last name')
    expect(errors.email).toBe('Please enter a valid email address')
    expect(errors.subject).toBe('Please enter a subject')
    expect(errors.message).toBe('Please enter a message')
  })

  it('accepts a valid contact payload', () => {
    const result = contactSchema.safeParse({
      firstName: 'Ada',
      lastName: 'Lovelace',
      email: 'ada@example.com',
      subject: 'Quote request',
      message: 'Please price lane A to B.',
    })
    expect(result.success).toBe(true)
  })

  it('rejects a malformed newsletter email', () => {
    const result = newsletterSchema.safeParse({ email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('accepts a valid newsletter email', () => {
    const result = newsletterSchema.safeParse({ email: 'reader@example.com' })
    expect(result.success).toBe(true)
  })
})
