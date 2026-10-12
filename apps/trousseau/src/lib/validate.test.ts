import { isValidRsvp } from './validate'

describe('the reservation check', () => {
  it('passes only a named reply with a well formed address', () => {
    expect(isValidRsvp('Marta Ellery', 'marta@ellery.example')).toBe(true)
    expect(isValidRsvp('   ', 'marta@ellery.example')).toBe(false)
    expect(isValidRsvp('Marta Ellery', 'not-an-address')).toBe(false)
  })

  it('wants a dot in the address and nothing but the address in it', () => {
    expect(isValidRsvp('Marta Ellery', 'marta@ellery')).toBe(false)
    expect(isValidRsvp('Marta Ellery', 'marta ellery@example.com')).toBe(false)
  })
})
