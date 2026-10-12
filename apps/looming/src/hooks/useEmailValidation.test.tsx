import { describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import type { FormEvent } from 'react'
import { useEmailValidation } from './useEmailValidation'
import { EMAIL_MESSAGE } from '../lib/validation'

function submitEvent() {
  return { preventDefault: vi.fn() } as unknown as FormEvent<HTMLFormElement>
}

describe('useEmailValidation', () => {
  it('starts on an empty field with nothing to report', () => {
    const { result } = renderHook(() => useEmailValidation())

    expect(result.current.value).toBe('')
    expect(result.current.error).toBeNull()
  })

  it('keeps keystrokes in state without validating them', () => {
    const { result } = renderHook(() => useEmailValidation())

    act(() => {
      result.current.change('ada@')
    })

    expect(result.current.value).toBe('ada@')
    expect(result.current.error).toBeNull()
  })

  it('rejects a malformed submit and always blocks the navigation', () => {
    const { result } = renderHook(() => useEmailValidation())
    const event = submitEvent()

    act(() => {
      result.current.change('ada@example')
    })
    act(() => {
      result.current.submit(event)
    })

    expect(event.preventDefault).toHaveBeenCalledTimes(1)
    expect(result.current.error).toBe(EMAIL_MESSAGE)
  })

  it('accepts a good address and keeps no success state', () => {
    const { result } = renderHook(() => useEmailValidation())
    const event = submitEvent()

    act(() => {
      result.current.change('ada@example.com')
    })
    act(() => {
      result.current.submit(event)
    })

    expect(event.preventDefault).toHaveBeenCalledTimes(1)
    expect(result.current.error).toBeNull()
  })

  it('clears the error state as soon as the field is focused again', () => {
    const { result } = renderHook(() => useEmailValidation())

    act(() => {
      result.current.submit(submitEvent())
    })
    expect(result.current.error).toBe(EMAIL_MESSAGE)

    act(() => {
      result.current.focus()
    })

    expect(result.current.error).toBeNull()
  })
})
