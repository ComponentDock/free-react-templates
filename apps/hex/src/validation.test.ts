import { validateStep } from './validation'

describe('validation', () => {
  it('returns empty errors for an invalid step number', () => {
    const result = validateStep(4, {})
    expect(result).toEqual({})
  })

  it('returns empty errors for step 0', () => {
    const result = validateStep(0, {})
    expect(result).toEqual({})
  })
})
