import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { GROUPS } from './content'
import { useGroups } from './use-groups'

describe('useGroups', () => {
  it('starts with every group open on a wide load', () => {
    const { result } = renderHook(() => useGroups(false))
    expect(GROUPS.every((group) => result.current.open[group.id])).toBe(true)
  })

  it('starts with only the first group open on a narrow load', () => {
    const { result } = renderHook(() => useGroups(true))
    expect(GROUPS.map((group) => result.current.open[group.id])).toEqual([
      true,
      false,
      false,
      false,
    ])
  })

  it('flips exactly one group on toggle', () => {
    const { result } = renderHook(() => useGroups(false))

    act(() => result.current.toggle('pt-g2'))

    expect(result.current.open['pt-g2']).toBe(false)
    expect(result.current.open['pt-g1']).toBe(true)

    act(() => result.current.toggle('pt-g2'))

    expect(result.current.open['pt-g2']).toBe(true)
  })

  it('closes and reopens every group in one call', () => {
    const { result } = renderHook(() => useGroups(false))

    act(() => result.current.collapseAll())

    expect(GROUPS.some((group) => result.current.open[group.id])).toBe(false)

    act(() => result.current.expandAll())

    expect(GROUPS.every((group) => result.current.open[group.id])).toBe(true)
  })
})
