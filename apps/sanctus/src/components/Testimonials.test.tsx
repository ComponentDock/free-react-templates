import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

function findQuote(quote: string): HTMLElement {
  return screen.getByText((content) => content.includes(quote))
}

describe('Testimonials', () => {
  it('renders the section heading and the first testimonial card', () => {
    render(<Testimonials />)
    expect(screen.getByText(testimonials.subheading)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: testimonials.heading }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: testimonials.itemHeading }),
    ).toBeInTheDocument()
    expect(findQuote(testimonials.quotes[0]!)).toBeInTheDocument()
    expect(screen.getByText(testimonials.author)).toBeInTheDocument()
    expect(screen.getByText(testimonials.role)).toBeInTheDocument()
  })

  it('navigates with Prev/Next pills and dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    expect(findQuote(testimonials.quotes[0]!)).toBeInTheDocument()
    await user.click(next)
    expect(findQuote(testimonials.quotes[1]!)).toBeInTheDocument()
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    await user.click(prev)
    expect(findQuote(testimonials.quotes[0]!)).toBeInTheDocument()
  })

  it('jumps to a slide via the dot navigation', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(findQuote(testimonials.quotes[2]!)).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Go to testimonial 9' }))
    expect(findQuote(testimonials.quotes[8]!)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeDisabled()
  })

  it('renders all nine dots', () => {
    render(<Testimonials />)
    const dots = screen
      .getAllByRole('button')
      .filter((button) => /^Go to testimonial \d+$/.test(button.getAttribute('aria-label') ?? ''))
    expect(dots).toHaveLength(9)
  })
})
