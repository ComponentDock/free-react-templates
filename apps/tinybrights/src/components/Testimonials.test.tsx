import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Parents Say/i })).toBeInTheDocument()
  })

  it('displays the first testimonial quote by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/TinyBrights has been wonderful/i)).toBeInTheDocument()
    expect(screen.getByText('Jessica Thompson')).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(3)
  })

  it('switches testimonial when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const secondDot = screen.getAllByRole('button', { name: /go to testimonial/i })[1]!
    await user.click(secondDot)
    expect(screen.getByText(/incredibly patient and creative/i)).toBeInTheDocument()
    expect(screen.getByText('Robert Chen')).toBeInTheDocument()
  })
})
