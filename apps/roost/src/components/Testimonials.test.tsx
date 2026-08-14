import { render, screen, fireEvent, act } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../data'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the first testimonial with avatar, name and meta', () => {
    render(<Testimonials />)

    const first = TESTIMONIALS[0]!
    expect(screen.getByText(new RegExp(first.quote))).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: first.name })).toBeInTheDocument()
    expect(screen.getByText(first.meta)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: `Portrait of ${first.name}` })).toBeInTheDocument()
  })

  it('auto-advances through the three slides', () => {
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Go to testimonial slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(3000)
    })
    expect(screen.getByRole('button', { name: 'Go to testimonial slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('button', { name: 'Go to testimonial slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide when its dot is clicked', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial slide 3' }))
    const third = TESTIMONIALS[2]!
    expect(screen.getByRole('heading', { name: third.name })).toBeInTheDocument()
  })
})
