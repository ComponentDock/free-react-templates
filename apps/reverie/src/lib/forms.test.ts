import { describe, expect, it } from 'vitest'
import { focusField, isEmail, validateRequest } from './forms'
import { GUESTS_ERROR, NAME_ERROR, REQUEST_VALUES, SERVICE_ERROR, EMAIL_ERROR } from './site'

describe('isEmail', () => {
  it('accepts an address with a local part, a domain and a dot', () => {
    expect(isEmail('guest@example.org')).toBe(true)
  })

  it('turns down the shapes the design also refuses', () => {
    expect(isEmail('')).toBe(false)
    expect(isEmail('guest@example')).toBe(false)
    expect(isEmail('guest@')).toBe(false)
  })
})

describe('validateRequest', () => {
  it('finds nothing to fix in a complete enquiry', () => {
    expect(
      validateRequest({
        name: 'Amara Whitlock',
        email: 'amara@example.org',
        service: 'Restaurant',
        guests: 'Up to 50',
      }),
    ).toEqual({})
  })

  it('answers on each of the four fields at once', () => {
    expect(validateRequest(REQUEST_VALUES)).toEqual({
      name: NAME_ERROR,
      email: EMAIL_ERROR,
      service: SERVICE_ERROR,
      guests: GUESTS_ERROR,
    })
  })

  it('names only the field that is wrong', () => {
    expect(
      validateRequest({
        name: '   ',
        email: 'amara@example.org',
        service: 'Honeymoon',
        guests: 'More than 200',
      }),
    ).toEqual({ name: NAME_ERROR })
  })
})

describe('focusField', () => {
  it('moves the focus onto the field it is given', () => {
    document.body.innerHTML = '<input id="probe" />'

    focusField('probe')

    expect(document.activeElement?.id).toBe('probe')
  })

  it('does nothing when the field is not on the page', () => {
    document.body.innerHTML = ''

    expect(() => {
      focusField('probe')
    }).not.toThrow()
  })
})
