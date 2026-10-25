import { describe, expect, it, vi } from 'vitest'
import {
  emailError,
  focusFirstInvalid,
  isEmail,
  isPhone,
  quoteError,
  validateQuote,
} from '../forms'

describe('quoteError', () => {
  it('requires every field', () => {
    expect(quoteError('name', '')).toBe('This field is required')
    expect(quoteError('phone', '   ')).toBe('This field is required')
    expect(quoteError('problem', '')).toBe('This field is required')
  })

  it('accepts a name and a problem option', () => {
    expect(quoteError('name', 'Alex')).toBeUndefined()
    expect(quoteError('problem', 'The tank is leaking')).toBeUndefined()
  })

  it('rejects a phone number shorter than ten digits', () => {
    expect(quoteError('phone', '555-0900')).toBe(
      'Please enter a phone number of at least ten digits',
    )
    expect(quoteError('phone', '(555) 090-0900')).toBeUndefined()
    expect(quoteError('phone', '5550900900')).toBeUndefined()
  })
})

describe('validateQuote', () => {
  it('reports all three fields when the form is submitted empty', () => {
    expect(validateQuote({ name: '', phone: '', problem: '' })).toEqual({
      name: 'This field is required',
      phone: 'This field is required',
      problem: 'This field is required',
    })
  })

  it('returns no errors for a complete form', () => {
    expect(
      validateQuote({ name: 'Alex Morgan', phone: '5550900900', problem: 'No hot water at all' }),
    ).toEqual({})
  })

  it('reports only the fields that are wrong', () => {
    expect(
      validateQuote({ name: 'Alex Morgan', phone: '0900', problem: 'The tank is leaking' }),
    ).toEqual({ phone: 'Please enter a phone number of at least ten digits' })
  })
})

describe('focusFirstInvalid', () => {
  it('focuses the first error in field order', () => {
    const focus = vi.fn()

    focusFirstInvalid({ phone: 'x', problem: 'y' }, focus)

    expect(focus).toHaveBeenCalledWith('phone')
  })

  it('does nothing when the form is valid', () => {
    const focus = vi.fn()

    focusFirstInvalid({}, focus)

    expect(focus).not.toHaveBeenCalled()
  })
})

describe('email helpers', () => {
  it('validates the newsletter address', () => {
    expect(isEmail('reader@example.com')).toBe(true)
    expect(isEmail('reader@example')).toBe(false)
  })

  it('returns the inline message for an empty or malformed address', () => {
    expect(emailError('')).toBe('This field is required')
    expect(emailError('nope')).toBe('Please enter a valid email address')
    expect(emailError(' reader@example.com ')).toBeUndefined()
  })

  it('counts digits for the phone check', () => {
    expect(isPhone('(555) 090-0900')).toBe(true)
    expect(isPhone('0900')).toBe(false)
  })
})
