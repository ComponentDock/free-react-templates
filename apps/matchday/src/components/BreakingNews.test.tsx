import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { BreakingNews } from './BreakingNews'

describe('BreakingNews', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the orange title block and the first headline', () => {
    render(<BreakingNews />)
    expect(screen.getByText('Breaking News')).toBeInTheDocument()
    expect(
      screen.getByText('Transfer window: three signings confirmed before the deadline'),
    ).toBeInTheDocument()
  })

  it('rotates to the next headline on the interval', () => {
    vi.useFakeTimers()
    render(<BreakingNews />)
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(
      screen.getByText('Manager praises the squad after a dominant home display'),
    ).toBeInTheDocument()
  })
})
