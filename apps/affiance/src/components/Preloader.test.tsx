import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { COVER_LEAVE_MS, Preloader } from './Preloader'
import { mockReducedMotion } from '../test/match-media'

afterEach(() => {
  vi.useRealTimers()
})

describe('Preloader', () => {
  it('covers the first paint with the design ring', () => {
    render(<Preloader />)

    const cover = screen.getByTestId('preloader')

    expect(cover).toHaveAttribute('aria-hidden', 'true')
    expect(cover).toHaveClass('fixed', 'inset-0', 'bg-white', 'visible', 'opacity-100')
    expect(cover.querySelector('button')).toBeNull()
    expect(cover.querySelectorAll('circle')).toHaveLength(2)
    expect(cover.querySelectorAll('circle')[0] as unknown as HTMLElement).toHaveClass('stroke-[#eeeeee]')
    expect(cover.querySelectorAll('circle')[1] as unknown as HTMLElement).toHaveClass('stroke-[#F96D00]')
  })

  it('leaves on the design opacity transition once the cover drops', () => {
    vi.useFakeTimers()
    render(<Preloader />)

    const cover = screen.getByTestId('preloader')

    expect(cover).toHaveClass('transition-[opacity,visibility]', 'duration-[400ms]')

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
