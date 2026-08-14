import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all four stat labels', () => {
    render(<Counters />)
    for (const label of ['Game Played', 'Coaches', 'Trophies', 'Members']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('counts up to the final values', () => {
    render(<Counters />)
    act(() => {
      vi.runAllTimers()
    })
    expect(screen.getByText('458+')).toBeInTheDocument()
    expect(screen.getByText('42+')).toBeInTheDocument()
    expect(screen.getByText('87+')).toBeInTheDocument()
    expect(screen.getByText('5,200+')).toBeInTheDocument()
  })
})
