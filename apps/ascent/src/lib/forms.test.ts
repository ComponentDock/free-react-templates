import { describe, expect, it } from 'vitest'
import { z } from 'zod'
import { fieldErrors } from './forms'

describe('fieldErrors', () => {
  it('maps each invalid field to its first issue message', () => {
    const result = z
      .object({ name: z.string().min(1), email: z.string().email() })
      .safeParse({ name: '', email: 'nope' })
    if (result.success) throw new Error('expected failure')
    const errors = fieldErrors({ error: result.error })
    expect(Object.keys(errors).sort()).toEqual(['email', 'name'])
    expect(errors.name).toBeTruthy()
    expect(errors.email).toBeTruthy()
  })

  it('keeps the first message when one field has multiple issues', () => {
    const result = z.object({ email: z.string().email().min(10) }).safeParse({ email: 'x' })
    if (result.success) throw new Error('expected failure')
    const errors = fieldErrors({ error: result.error })
    expect(Object.keys(errors)).toEqual(['email'])
    expect(errors.email).toBe('Invalid email address')
  })

  it('ignores issues without a field path', () => {
    const result = z.string().min(1).safeParse('')
    if (result.success) throw new Error('expected failure')
    expect(fieldErrors({ error: result.error })).toEqual({})
  })
})
