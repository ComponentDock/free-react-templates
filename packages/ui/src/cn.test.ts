import { describe, expect, it } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
  it('joins class names', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c')
  })

  it('filters out falsy values', () => {
    expect(cn('a', false, undefined, null, 0, '', 'b')).toBe('a b')
  })

  it('merges conflicting Tailwind classes (last wins)', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500')
  })

  it('accepts arrays and objects via clsx', () => {
    expect(cn(['a', 'b'], { c: true, d: false })).toBe('a b c')
  })

  it('returns an empty string for no inputs', () => {
    expect(cn()).toBe('')
  })
})
