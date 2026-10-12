import { describe, expect, it } from 'vitest'
import { focusField, isEmailValid, isMessageValid, isNameValid } from './validate'

describe('isNameValid', () => {
  it('wants a name that is more than whitespace', () => {
    expect(isNameValid('Wren')).toBe(true)
    expect(isNameValid('   ')).toBe(false)
    expect(isNameValid('')).toBe(false)
  })
})

describe('isEmailValid', () => {
  it('accepts the addresses the design own pattern accepts', () => {
    expect(isEmailValid('wren@example.com')).toBe(true)
    expect(isEmailValid('elias.quay+rsvp@nuptials.example')).toBe(true)
    expect(isEmailValid('  wren@example.co  ')).toBe(true)
  })

  it('rejects what that pattern rejects', () => {
    expect(isEmailValid('wren@example')).toBe(false)
    expect(isEmailValid('wren.example.com')).toBe(false)
    expect(isEmailValid('@example.com')).toBe(false)
    expect(isEmailValid('')).toBe(false)
  })
})

describe('isMessageValid', () => {
  it('wants a note that is more than whitespace', () => {
    expect(isMessageValid('Two of us, no shellfish.')).toBe(true)
    expect(isMessageValid('  ')).toBe(false)
  })
})

describe('focusField', () => {
  it('puts the visitor in front of the field', () => {
    const field = document.createElement('input')

    field.id = 'a-field'
    document.body.append(field)

    focusField('a-field')

    expect(document.activeElement).toBe(field)

    field.remove()
  })

  it('leaves the page alone when there is no such field', () => {
    expect(focusField('no-such-field')).toBeUndefined()
  })
})
