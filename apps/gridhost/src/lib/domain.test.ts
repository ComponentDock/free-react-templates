import { tldTintClass, validateDomain } from './domain'

describe('tldTintClass', () => {
  it('gives the first four columns their own tint', () => {
    expect(tldTintClass(0)).toBe('text-tld-1')
    expect(tldTintClass(1)).toBe('text-tld-2')
    expect(tldTintClass(2)).toBe('text-tld-3')
    expect(tldTintClass(3)).toBe('text-tld-4')
  })

  it('shares the last tint from the fifth column on', () => {
    expect(tldTintClass(4)).toBe('text-tld-5')
    expect(tldTintClass(9)).toBe('text-tld-5')
  })
})

describe('validateDomain', () => {
  it('accepts a bare name', () => {
    expect(validateDomain('gridlines', '.com')).toBeNull()
  })

  it('asks for a name when the field is empty or blank', () => {
    expect(validateDomain('', '.com')).toBe('Enter a domain name to search — for example yourbrand.')
    expect(validateDomain('   ', '.com')).toBe(
      'Enter a domain name to search — for example yourbrand.',
    )
  })

  it('rejects spaces inside the name', () => {
    expect(validateDomain('grid lines', '.com')).toBe('Domain names cannot contain spaces.')
  })

  it('points out that the ending is already selected', () => {
    expect(validateDomain('gridlines.dev', '.io')).toBe(
      'Search for the name only — the .io ending is already selected.',
    )
  })
})
