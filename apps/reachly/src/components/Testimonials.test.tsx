import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('shows the first slide with quote, avatar and author', () => {
    render(<Testimonials />)

    const first = testimonials.slides[0]!
    expect(screen.getByText(first.quote)).toBeInTheDocument()
    expect(screen.getByText(first.author)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: first.author })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos/id/1027'),
    )
    expect(document.querySelector('svg.lucide-quote')).toBeInTheDocument()
  })

  it('navigates slides with the arrows, wrapping both ways', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    const previous = screen.getByRole('button', { name: 'Previous testimonial' })

    await user.click(next)
    expect(screen.getByText(testimonials.slides[1]!.quote)).toBeInTheDocument()

    // Wrap forward: slide 2 -> 0.
    await user.click(next)
    await user.click(next)
    expect(screen.getByText(testimonials.slides[0]!.quote)).toBeInTheDocument()

    // Wrap backward: slide 0 -> 2.
    await user.click(previous)
    expect(screen.getByText(testimonials.slides[2]!.quote)).toBeInTheDocument()
  })

  it('jumps to a slide via the dot indicators', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const third = screen.getByRole('button', { name: 'Go to testimonial 3' })
    expect(third).toHaveAttribute('aria-current', 'false')

    await user.click(third)
    expect(screen.getByText(testimonials.slides[2]!.quote)).toBeInTheDocument()
    expect(third).toHaveAttribute('aria-current', 'true')
  })
})
