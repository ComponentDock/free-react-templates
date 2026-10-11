import { describe, expect, it } from 'vitest'
import { fieldErrors, quoteSchema, trackingSchema } from './forms'

describe('trackingSchema', () => {
  it('accepts a non-empty tracking ID', () => {
    const parsed = trackingSchema.safeParse({ trackingId: '  VTX-99120  ' })
    expect(parsed.success).toBe(true)
    if (parsed.success) {
      expect(parsed.data.trackingId).toBe('VTX-99120')
    }
  })

  it('rejects an empty tracking ID with a helpful message', () => {
    const parsed = trackingSchema.safeParse({ trackingId: '   ' })
    expect(parsed.success).toBe(false)
    if (!parsed.success) {
      expect(parsed.error.issues[0]?.message).toBe('Please enter a tracking ID')
    }
  })
})

describe('quoteSchema', () => {
  const valid = {
    name: 'Ada Lovelace',
    email: 'ada@example.com',
    phone: '+1 555-010-0142',
    freight: 'General Freight',
    departure: 'Newark',
    incoterms: 'DAP',
    weight: '120',
    height: '90',
    width: '80',
    length: '120',
  }

  it('accepts a fully filled quote request', () => {
    const parsed = quoteSchema.safeParse(valid)
    expect(parsed.success).toBe(true)
    if (parsed.success) {
      expect(parsed.data.name).toBe('Ada Lovelace')
    }
  })

  it('rejects empty required fields and malformed email', () => {
    const parsed = quoteSchema.safeParse({
      name: '',
      email: 'not-an-email',
      phone: '',
      freight: '',
      departure: '',
      incoterms: '',
      weight: '',
      height: '',
      width: '',
      length: '',
    })
    expect(parsed.success).toBe(false)
    if (!parsed.success) {
      const errors = fieldErrors<'name' | 'email'>(parsed.error)
      expect(errors.name).toBe('Please enter your name')
      expect(errors.email).toBe('Please enter a valid email address')
      expect(parsed.error.issues.length).toBe(5)
    }
  })
})

describe('fieldErrors', () => {
  it('maps zod issues to messages keyed by field path', () => {
    const parsed = quoteSchema.safeParse({
      name: '',
      email: 'bad',
      phone: 'x',
      freight: 'General Freight',
      departure: 'Newark',
      incoterms: '',
      weight: '',
      height: '',
      width: '',
      length: '',
    })
    expect(parsed.success).toBe(false)
    if (!parsed.success) {
      const errors = fieldErrors<'name' | 'email'>(parsed.error)
      expect(errors).toEqual({
        name: 'Please enter your name',
        email: 'Please enter a valid email address',
      })
    }
  })
})
