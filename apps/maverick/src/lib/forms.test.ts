import { describe, expect, it } from 'vitest'
import { contactSchema, fieldErrors } from './forms'

describe('contactSchema', () => {
  it('accepts a valid contact payload', () => {
    const result = contactSchema.safeParse({
      name: 'Alex Maverick',
      email: 'alex@example.com',
      subject: 'Project inquiry',
      message: 'Hello, I would like to hire you.',
    })
    expect(result.success).toBe(true)
  })

  it('rejects an empty name', () => {
    const result = contactSchema.safeParse({
      name: '',
      email: 'alex@example.com',
      subject: 'Project inquiry',
      message: 'Hello',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).name).toBe('Please enter your name')
    }
  })

  it('rejects an invalid email', () => {
    const result = contactSchema.safeParse({
      name: 'Alex',
      email: 'not-an-email',
      subject: 'Project inquiry',
      message: 'Hello',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      expect(fieldErrors(result).email).toBe('Please enter a valid email')
    }
  })

  it('rejects a missing subject and message', () => {
    const result = contactSchema.safeParse({
      name: 'Alex',
      email: 'alex@example.com',
      subject: '',
      message: '',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = fieldErrors(result)
      expect(errors.subject).toBe('Please enter a subject')
      expect(errors.message).toBe('Please enter a message')
    }
  })
})
