import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

describe('Testimonials', () => {
  it('renders the section heading and the first slide', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Clients' })).toBeInTheDocument()
    const first = testimonials[0]!
    expect(screen.getByText(new RegExp(first.quote.slice(0, 24)))).toBeInTheDocument()
    expect(screen.getByAltText(first.name)).toBeInTheDocument()
  })

  it('cycles forward and wraps around to the first slide', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const next = screen.getByRole('button', { name: 'Next testimonial' })
    for (let i = 1; i < testimonials.length; i += 1) {
      await user.click(next)
      const slide = testimonials[i]!
      expect(screen.getByText(new RegExp(slide.quote.slice(0, 24)))).toBeInTheDocument()
    }
    await user.click(next)
    const first = testimonials[0]!
    expect(screen.getByText(new RegExp(first.quote.slice(0, 24)))).toBeInTheDocument()
  })

  it('cycles backwards from the first slide to the last', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    const last = testimonials[testimonials.length - 1]!
    expect(screen.getByText(new RegExp(last.quote.slice(0, 24)))).toBeInTheDocument()
  })

  it('jumps to a slide via the dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    const third = testimonials[2]!
    expect(screen.getByText(new RegExp(third.quote.slice(0, 24)))).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
