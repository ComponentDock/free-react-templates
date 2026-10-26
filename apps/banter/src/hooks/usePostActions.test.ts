import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { formatCount } from '../lib/format'
import { usePostActions } from './usePostActions'

describe('formatCount', () => {
  it('formats thousands with an en-US separator', () => {
    expect(formatCount(248)).toBe('248')
    expect(formatCount(1204)).toBe('1,204')
  })
})

describe('usePostActions', () => {
  it('starts from the given count and pressed state', () => {
    const { result } = renderHook(() => usePostActions(248, false))

    expect(result.current.liked).toBe(false)
    expect(result.current.count).toBe(248)
    expect(result.current.label).toBe('248')
  })

  it('likes up and unlikes back down', () => {
    const { result } = renderHook(() => usePostActions(248, false))

    act(() => result.current.toggle())
    expect(result.current.liked).toBe(true)
    expect(result.current.count).toBe(249)

    act(() => result.current.toggle())
    expect(result.current.liked).toBe(false)
    expect(result.current.count).toBe(248)
  })

  it('decrements from a pressed start and keeps the formatted label', () => {
    const { result } = renderHook(() => usePostActions(1204, true))

    expect(result.current.label).toBe('1,204')

    act(() => result.current.toggle())
    expect(result.current.liked).toBe(false)
    expect(result.current.count).toBe(1203)
    expect(result.current.label).toBe('1,203')
  })
})
