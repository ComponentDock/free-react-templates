import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from '../components/Testimonials'
import { resetMedia, stubMedia } from '../test/helpers'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  resetMedia()
})

describe('Testimonials', () => {
  it('pages through all three quotes one at a time on a phone', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    expect(screen.getAllByRole('listitem')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Previous testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonials' })).toBeInTheDocument()

    const dots = screen.getAllByRole('button', { name: /Go to testimonial page/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    const track = screen.getByTestId('carousel').querySelector('ul') as HTMLElement
    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(track.style.transform).toBe('translateX(-100%)')

    await user.click(screen.getByRole('button', { name: 'Previous testimonials' }))
    expect(track.style.transform).toBe('translateX(-0%)')

    await user.click(dots[2]!)
    expect(track.style.transform).toBe('translateX(-200%)')
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })

  it('shows two per view with two pages in the middle breakpoint', () => {
    stubMedia({ '(min-width: 640px)': true })
    render(<Testimonials />)

    expect(screen.getAllByRole('button', { name: /Go to testimonial page/ })).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Next testimonials' })).toBeInTheDocument()
  })

  it('drops the arrows when all three fit on one page', () => {
    stubMedia({ '(min-width: 640px)': true, '(min-width: 1024px)': true })
    render(<Testimonials />)

    expect(screen.getAllByRole('button', { name: /Go to testimonial page/ })).toHaveLength(1)
    expect(screen.queryByRole('button', { name: 'Next testimonials' })).not.toBeInTheDocument()
  })

  it('re-lays-out and returns to the first page when the viewport changes', () => {
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /Go to testimonial page/ })).toHaveLength(3)

    stubMedia({ '(min-width: 640px)': true, '(min-width: 1024px)': true })
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.getAllByRole('button', { name: /Go to testimonial page/ })).toHaveLength(1)
  })

  it('advances itself every five seconds and pauses on hover', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    const track = screen.getByTestId('carousel').querySelector('ul') as HTMLElement

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-100%)')

    const carousel = screen.getByTestId('carousel')
    fireEvent.mouseEnter(carousel)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(track.style.transform).toBe('translateX(-100%)')

    fireEvent.mouseLeave(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-200%)')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-0%)')
  })

  it('never starts under reduced motion', () => {
    vi.useFakeTimers()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    render(<Testimonials />)

    const track = screen.getByTestId('carousel').querySelector('ul') as HTMLElement
    act(() => {
      vi.advanceTimersByTime(20000)
    })

    expect(track.style.transform).toBe('translateX(-0%)')
  })
})
