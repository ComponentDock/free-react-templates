import { describe, expect, it } from 'vitest'
import { isValidReply } from './validate'

describe('the reply check', () => {
  it('asks for a name and a reachable address', () => {
    expect(isValidReply('   ', 'nadia@example.com')).toBe(false)
    expect(isValidReply('Nadia', 'nadia.example.com')).toBe(false)
    expect(isValidReply('Nadia', 'nadia@example.com')).toBe(true)
  })
})
