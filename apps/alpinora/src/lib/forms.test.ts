import { describe, expect, it } from 'vitest'
import { contactSchema, fieldErrors, newsletterSchema } from './forms'

describe('contactSchema', () => {
  it('accepts a fully filled message', () => {
    const parsed = contactSchema.safeParse({
      name: 'Ada',
      email: 'ada@example.com',
      subject: 'Trip planning',
      message: 'Hello there',
    })
    expect(parsed.success).toBe(true)
  })

  it('rejects empty fields with per-field messages', () => {
    const parsed = contactSchema.safeParse({ name: '', email: '', subject: '', message: '' })
    expect(parsed.success).toBe(false)
    if (parsed.success) return
    const errors = fieldErrors<'name' | 'email' | 'subject' | 'message'>(parsed.error)
    expect(errors.name).toBe('Please enter your name')
    expect(errors.email).toBe('Please enter a valid email address')
    expect(errors.subject).toBe('Please enter your subject')
    expect(errors.message).toBe('Please enter your message')
  })

  it('rejects an invalid email format', () => {
    const parsed = contactSchema.safeParse({
      name: 'Ada',
      email: 'not-an-email',
      subject: 'Hi',
      message: 'Hello',
    })
    expect(parsed.success).toBe(false)
    if (parsed.success) return
    const errors = fieldErrors<'email'>(parsed.error)
    expect(errors.email).toBe('Please enter a valid email address')
  })
})

describe('newsletterSchema', () => {
  it('accepts a valid email', () => {
    expect(newsletterSchema.safeParse({ email: 'ada@example.com' }).success).toBe(true)
  })

  it('rejects an empty email', () => {
    const parsed = newsletterSchema.safeParse({ email: '' })
    expect(parsed.success).toBe(false)
    if (parsed.success) return
    expect(fieldErrors<'email'>(parsed.error).email).toBe('Please enter a valid email address')
  })
})
