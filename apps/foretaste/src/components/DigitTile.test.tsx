import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { DigitTile, FLIP_MS } from './DigitTile'

describe('DigitTile', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('paints one digit on a 90x120 navy tile', () => {
    render(<DigitTile digit="0" />)

    expect(screen.getByTestId('digit-tile')).toHaveTextContent('0')
    expect(screen.getByTestId('digit-tile')).toHaveClass(
      'mx-[3px]',
      'mt-[3px]',
      'bg-tile',
      'h-[120px]',
      'w-[90px]',
      'rounded-[10px]',
      'font-digit',
      'text-[120px]',
      'text-white',
    )
  })

  it('reserves the 80px row gap the captions hang in', () => {
    render(<DigitTile digit="0" />)

    expect(screen.getByTestId('digit-tile')).toHaveClass('mb-[80px]')
  })

  it('leaves a digit that did not change alone', () => {
    const { rerender } = render(<DigitTile digit="3" />)

    rerender(<DigitTile digit="3" />)

    expect(screen.getByTestId('digit-tile')).not.toHaveClass('animate-turn')
  })

  it('flips the tile whose digit changed', () => {
    const { rerender } = render(<DigitTile digit="3" />)

    rerender(<DigitTile digit="2" />)

    expect(screen.getByTestId('digit-tile')).toHaveClass('animate-turn')
  })

  it('stops flipping half a second later', () => {
    vi.useFakeTimers()
    const { rerender } = render(<DigitTile digit="3" />)
    rerender(<DigitTile digit="0" />)

    act(() => {
      vi.advanceTimersByTime(FLIP_MS)
    })

    expect(screen.getByTestId('digit-tile')).not.toHaveClass('animate-turn')
  })

  it('cancels a pending flip when it unmounts', () => {
    vi.useFakeTimers()
    const { rerender, unmount } = render(<DigitTile digit="3" />)
    rerender(<DigitTile digit="0" />)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })

  it('accepts layout overrides', () => {
    render(<DigitTile digit="9" className="shadow-lg" />)

    expect(screen.getByTestId('digit-tile')).toHaveClass('shadow-lg')
  })
})
