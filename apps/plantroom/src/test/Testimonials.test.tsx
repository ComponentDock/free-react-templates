import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from '../components/Testimonials'
import { TESTIMONIALS } from '../data'
import { resetMedia, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  resetMedia()
})

function track(): HTMLElement {
  return screen.getByTestId('carousel-track')
}

describe('Testimonials', () => {
  it('renders the three references with initials and roles', () => {
    render(<Testimonials />)

    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
      expect(screen.getByText(testimonial.role)).toBeInTheDocument()
      expect(screen.getByText(`“${testimonial.quote}”`)).toBeInTheDocument()
    })
    expect(screen.getAllByLabelText('Five out of five stars')).toHaveLength(3)
  })

  it('is a static one-page row at desktop: no dots, no arrows', () => {
    stubMedia({ '(min-width: 640px)': true, '(min-width: 1024px)': true })

    render(<Testimonials />)

    expect(screen.queryByTestId('carousel-dots')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Next testimonials' })).not.toBeInTheDocument()
    expect(screen.getByText('Dana Okonjo').closest('li')?.style.width).toBe('33.333333333333336%')
  })

  it('pages two-up with two dots and working arrows between 640 and 1023 px', async () => {
    stubMedia({ '(min-width: 640px)': true })
    const user = userEvent.setup()

    render(<Testimonials />)

    expect(screen.getByText('Dana Okonjo').closest('li')?.style.width).toBe('50%')
    const dots = screen.getByTestId('carousel-dots').querySelectorAll('button')
    expect(dots).toHaveLength(2)
    expect(dots[0]).toHaveClass('w-8', 'bg-primary-600')
    expect(dots[1]).toHaveClass('w-2.5', 'bg-gray-300')

    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(track().style.transform).toBe('translateX(-100%)')
    expect(screen.getByRole('button', { name: 'Go to testimonial page 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    await user.click(screen.getByRole('button', { name: 'Next testimonials' }))
    expect(track().style.transform).toBe('translateX(-0%)')

    await user.click(screen.getByRole('button', { name: 'Previous testimonials' }))
    expect(track().style.transform).toBe('translateX(-100%)')

    await user.click(screen.getByRole('button', { name: 'Go to testimonial page 1' }))
    expect(track().style.transform).toBe('translateX(-0%)')
  })

  it('pages one-up on a phone with three dots', () => {
    render(<Testimonials />)

    expect(screen.getByText('Dana Okonjo').closest('li')?.style.width).toBe('100%')
    expect(screen.getByTestId('carousel-dots').querySelectorAll('button')).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Previous testimonials' }).className).toContain(
      'left-0',
    )
    expect(screen.getByRole('button', { name: 'Next testimonials' }).className).toContain('right-0')
  })

  it('re-lays-out and returns to the first page when the viewport changes', () => {
    render(<Testimonials />)
    expect(screen.getByText('Dana Okonjo').closest('li')?.style.width).toBe('100%')

    stubMedia({ '(min-width: 640px)': true, '(min-width: 1024px)': true })
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(screen.getByText('Dana Okonjo').closest('li')?.style.width).toBe('33.333333333333336%')
    expect(screen.queryByTestId('carousel-dots')).not.toBeInTheDocument()
  })

  it('advances itself every five seconds and pauses on hover', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track().style.transform).toBe('translateX(-100%)')

    const carousel = screen.getByTestId('carousel')
    fireEvent.mouseEnter(carousel)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(track().style.transform).toBe('translateX(-100%)')

    fireEvent.mouseLeave(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track().style.transform).toBe('translateX(-200%)')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track().style.transform).toBe('translateX(-0%)')
  })

  it('never starts under reduced motion', () => {
    vi.useFakeTimers()
    stubMedia({ '(prefers-reduced-motion: reduce)': true })
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })

    expect(track().style.transform).toBe('translateX(-0%)')
  })
})
