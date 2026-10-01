import { describe, expect, it } from 'vitest'
import { callbackSchema, fieldErrors } from './forms'

describe('callbackSchema', () => {
  it('accepts a valid call-back request', () => {
    const result = callbackSchema.safeParse({
      name: '  Dana Fox  ',
      email: 'dana@example.com',
      phone: '+44 20 7930 8205',
      services: 'Services 1',
      message: 'Please quote three pallets.',
    })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBe('Dana Fox')
    }
  })

  it('rejects empty required fields and a malformed email', () => {
    const result = callbackSchema.safeParse({
      name: '   ',
      email: 'not-an-email',
      phone: '',
      services: 'Services',
      message: '',
    })
    expect(result.success).toBe(false)
  })
})

describe('fieldErrors', () => {
  it('maps zod issues to per-field messages keyed by the field name', () => {
    const result = callbackSchema.safeParse({
      name: '',
      email: 'bad',
      services: 'Services',
      message: '',
    })
    expect(result.success).toBe(false)
    if (!result.success) {
      const errors = fieldErrors(result)
      expect(errors.name).toBe('Please enter your name')
      expect(errors.email).toBe('Please enter a valid email address')
      expect(errors.message).toBe('Please enter a message')
      expect(errors.phone).toBeUndefined()
    }
  })
})
