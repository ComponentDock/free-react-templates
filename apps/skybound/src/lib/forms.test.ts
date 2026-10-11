import { describe, expect, it } from 'vitest'
import { fieldErrors, newsletterSchema, packageSearchSchema } from './forms'

describe('packageSearchSchema', () => {
  it('accepts a complete search with trimmed values', () => {
    const parsed = packageSearchSchema.safeParse({
      destination: '  Santorini  ',
      checkIn: '2026-10-12',
      checkOut: '2026-10-19',
      adults: '2',
      children: '1',
    })
    expect(parsed.success).toBe(true)
    expect(parsed.data?.destination).toBe('Santorini')
  })

  it('rejects an empty search with one message per field', () => {
    const parsed = packageSearchSchema.safeParse({
      destination: '',
      checkIn: '',
      checkOut: '',
      adults: '',
      children: '',
    })
    expect(parsed.success).toBe(false)
    const messages = fieldErrors(parsed.error!)
    expect(messages).toEqual({
      destination: 'Please enter your destination',
      checkIn: 'Please choose a check in date',
      checkOut: 'Please choose a check out date',
      adults: 'Please choose the number of adults',
      children: 'Please choose the number of children',
    })
  })
})

describe('newsletterSchema', () => {
  it('accepts a valid email address', () => {
    expect(newsletterSchema.safeParse({ email: 'ada@example.com' }).success).toBe(true)
  })

  it('rejects a blank or malformed email address', () => {
    for (const email of ['', '   ', 'ada@']) {
      const parsed = newsletterSchema.safeParse({ email })
      expect(parsed.success).toBe(false)
      expect(fieldErrors<'email'>(parsed.error!).email).toBe('Please enter a valid email address')
    }
  })
})
