import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { fieldErrors, subscribeSchema } from './forms'

describe('subscribeSchema', () => {
  it('accepts a name and a well-formed e-mail', () => {
    const result = subscribeSchema.safeParse({ name: 'Ada', email: 'ada@example.com' })

    expect(result.success).toBe(true)
  })

  it('trims the values before validating', () => {
    const result = subscribeSchema.safeParse({ name: '  Ada  ', email: ' ada@example.com ' })

    expect(result.success && result.data).toEqual({ name: 'Ada', email: 'ada@example.com' })
  })

  it('rejects an empty name', () => {
    const result = subscribeSchema.safeParse({ name: '   ', email: 'ada@example.com' })

    expect(result.success).toBe(false)
    expect(result.success ? [] : result.error.issues[0]?.message).toBe('Name is required')
  })

  it('rejects an empty email', () => {
    const result = subscribeSchema.safeParse({ name: 'Ada', email: '' })

    expect(result.success).toBe(false)
    expect(result.success ? [] : result.error.issues[0]?.message).toBe('Email is required')
  })

  it('rejects a malformed email', () => {
    const result = subscribeSchema.safeParse({ name: 'Ada', email: 'ada@example' })

    expect(result.success).toBe(false)
    expect(result.success ? [] : result.error.issues[0]?.message).toBe(
      'Valid email is required: ex@abc.xyz',
    )
  })
})

describe('fieldErrors', () => {
  it('keeps the first message per field and ignores unknown paths', () => {
    const error = new ZodError([
      { code: 'custom', path: ['name'], message: 'Name is required' },
      { code: 'custom', path: ['name'], message: 'duplicate for the same field' },
      { code: 'custom', path: ['nickname'], message: 'not a subscribe field' },
      { code: 'custom', path: [], message: 'root level issue' },
      { code: 'custom', path: ['email'], message: 'Email is required' },
    ])

    expect(fieldErrors(error)).toEqual({
      name: 'Name is required',
      email: 'Email is required',
    })
  })
})
