import { describe, expect, it, vi } from 'vitest'
import type { FormEvent } from 'react'
import { act, renderHook } from '@testing-library/react'
import { useEmailValidation } from './useEmailValidation'
import { EMAIL_MESSAGE } from '../lib/validation'

function submitEvent() {
  return { preventDefault: vi.fn() } as unknown as FormEvent<HTMLFormElement>
}

describe('useEmailValidation', () => {
  it('starts empty with no error', () => {
    const { result } = renderHook(() => useEmailValidation())

    expect(result.current.value).toBe('')
    expect(result.current.error).toBeNull()
  })

  it('records keystrokes without validating them', () => {
    const { result } = renderHook(() => useEmailValidation())

    act(() => {
      result.current.change('ada@example')
    })

    expect(result.current.value).toBe('ada@example')
    expect(result.current.error).toBeNull()
  })

  it('blocks the navigation and reveals the error on a rejected submit', () => {
    const { result } = renderHook(() => useEmailValidation())
    const event = submitEvent()

    act(() => {
      result.current.submit(event)
    })

    expect(event.preventDefault).toHaveBeenCalled()
    expect(result.current.error).toBe(EMAIL_MESSAGE)
  })

  it('keeps no error and no success state on an accepted submit', () => {
    const { result } = renderHook(() => useEmailValidation())

    act(() => {
      result.current.change('ada@example.com')
    })

    act(() => {
      result.current.submit(submitEvent())
    })

    expect(result.current.error).toBeNull()
  })

  it('clears the error as soon as the field is focused again', () => {
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
