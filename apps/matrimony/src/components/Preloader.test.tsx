import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { COVER_LEAVE_MS, Preloader } from './Preloader'
import { mockReducedMotion } from '../test/match-media'

afterEach(() => {
  vi.useRealTimers()
})

describe('Preloader', () => {
  it('covers first paint with the design sheet and its scarlet arc', () => {
    render(<Preloader />)

    const cover = screen.getByTestId('preloader')

    expect(cover).toHaveAttribute('aria-hidden', 'true')
    expect(cover).toHaveClass('fixed', 'inset-0', 'bg-preloader', 'visible', 'opacity-100')
    expect(cover.querySelector('button')).toBeNull()
    expect(cover.querySelector('a')).toBeNull()

    const disc = cover.querySelector('span')

    expect(disc).toHaveClass('rounded-full', 'bg-white', 'border-t-brand')
    expect(cover.querySelectorAll('svg')).toHaveLength(1)
  })

  it('leaves on the design fade 450ms after the cover drops', () => {
    vi.useFakeTimers()
    render(<Preloader />)

    const cover = screen.getByTestId('preloader')

    expect(cover).toHaveClass('transition-[opacity,visibility]', 'duration-[600ms]')

    act(() => {
      vi.advanceTimersByTime(COVER_LEAVE_MS)
    })

    expect(cover).toHaveClass('invisible', 'opacity-0')
  })

  it('leaves without a fade when the visitor asks for reduced motion', () => {
    mockReducedMotion()

    render(<Preloader />)

    expect(screen.getByTestId('preloader')).toHaveClass('transition-none')
  })
})
