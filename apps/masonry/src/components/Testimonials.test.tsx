import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Testimonials/i })).toBeInTheDocument()
  })

  it('shows an initial quote with an author name', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Falcon Astle/i)).toBeInTheDocument()
    expect(screen.getAllByRole('blockquote').length).toBeGreaterThanOrEqual(1)
  })

  it('cycles to the next quote when the next button is pressed', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const initial = screen.getByRole('blockquote').textContent
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    const next = screen.getByRole('blockquote').textContent
    expect(next).not.toBe(initial)
  })

  it('cycles to the previous quote when the prev button is pressed', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getAllByRole('blockquote').length).toBeGreaterThanOrEqual(1)
  })
})
