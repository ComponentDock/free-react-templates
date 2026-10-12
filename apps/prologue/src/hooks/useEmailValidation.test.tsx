import { describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import type { FormEvent } from 'react'
import { useEmailValidation } from './useEmailValidation'
import { EMAIL_MESSAGE } from '../lib/validation'

/** A stand-in submit event so the hook can be driven without a form. */
function submitEvent() {
  return { preventDefault: vi.fn() } as unknown as FormEvent<HTMLFormElement>
}

describe('useEmailValidation', () => {
  it('starts empty, accepted and never validates on a keystroke', () => {
    const { result } = renderHook(() => useEmailValidation())

    expect(result.current.value).toBe('')
    expect(result.current.error).toBeNull()

    act(() => {
      result.current.change('ada@example')
    })

    expect(result.current.value).toBe('ada@example')
    expect(result.current.error).toBeNull()
  })

  it('blocks the submit and reveals the requirement line on a miss', () => {
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

  it('clears the error state when the field is focused again', () => {
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

  it('accepts a good address without keeping a success state', () => {
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
})
