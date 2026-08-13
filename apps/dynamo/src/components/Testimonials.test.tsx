import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the dark box with heading and testimonial content', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: "Client's Testimonials" })).toBeInTheDocument()
    const quotes = screen.getAllByText(/Dynamo re-engineered|engineering quality/i)
    expect(quotes.length).toBeGreaterThan(0)
    expect(screen.getAllByText('Sarah Mitchell')[0]).toBeInTheDocument()
    expect(screen.getAllByText('CEO, Dynamo Energy')[0]).toBeInTheDocument()
    expect(screen.getAllByAltText(/portrait of sarah mitchell/i)[0]).toBeInTheDocument()
  })

  it('renders a background image on the left half', () => {
    const { container } = render(<Testimonials />)
    const bg = container.querySelector('[data-testimonial-bg]')
    expect(bg).not.toBeNull()
    expect(bg!.getAttribute('style')).toContain('url(')
  })

  it('advances the testimonial carousel via dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 2/i }))
    expect(screen.getByRole('button', { name: /go to testimonial 2/i })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
