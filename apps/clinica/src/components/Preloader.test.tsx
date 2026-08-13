import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Preloader } from './Preloader'
import { brand } from '../data'

describe('Preloader', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders a full-screen overlay with a rotating ring and logo mark', () => {
    render(<Preloader />)
    const overlay = screen.getByTestId('preloader')
    expect(overlay).toHaveClass('bg-[#f7f7f7]')
    expect(overlay.querySelector('.animate-spin')).not.toBeNull()
    expect(overlay).toHaveTextContent(`${brand.name}.`)
  })

  it('fades out after the load timer elapses', () => {
    vi.useFakeTimers()
    render(<Preloader />)
    const overlay = screen.getByTestId('preloader')
    expect(overlay).not.toHaveClass('opacity-0')

    act(() => {
      vi.advanceTimersByTime(800)
    })
    expect(overlay).toHaveClass('opacity-0')
    expect(overlay).toHaveClass('pointer-events-none')
  })

  it('clears the timer on unmount', () => {
    vi.useFakeTimers()
    const spy = vi.spyOn(window, 'clearTimeout')
    const { unmount } = render(<Preloader />)
    unmount()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
