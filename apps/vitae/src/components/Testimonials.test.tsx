import { render, screen, fireEvent, act } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('Testimonials', () => {
  it('renders the dark section title and the first quote', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials.heading }),
    ).toBeInTheDocument()
    expect(screen.getByText(`“${testimonials.items[0]!.quote}”`)).toBeInTheDocument()
    expect(screen.getByText(`— ${testimonials.items[0]!.name}`)).toBeInTheDocument()
  })

  it('renders a dot per slide', () => {
    render(<Testimonials />)
    for (let i = 0; i < testimonials.items.length; i += 1) {
      expect(screen.getByRole('button', { name: `Show testimonial ${i + 1}` })).toBeInTheDocument()
    }
  })

  it('jumps to a slide when its dot is clicked', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 2' }))
    expect(screen.getByText(`“${testimonials.items[1]!.quote}”`)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-rotates through the slides on an interval', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    expect(screen.getByText(`“${testimonials.items[0]!.quote}”`)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(`“${testimonials.items[1]!.quote}”`)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.getByText(`“${testimonials.items[0]!.quote}”`)).toBeInTheDocument()
  })

  it('clears the interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Testimonials />)
    const spy = vi.spyOn(globalThis, 'clearInterval')
    unmount()
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })
})
