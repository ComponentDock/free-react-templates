import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the testimonial heading and first quote', () => {
    render(<Testimonial />)

    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByText(/Exceptional service/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('renders the phone CTA', () => {
    render(<Testimonial />)

    expect(screen.getByText('+1 800 556 6688')).toBeInTheDocument()
  })

  it('navigates between testimonials using dot buttons', async () => {
    const user = userEvent.setup()
    render(<Testimonial />)

    const dots = screen.getAllByRole('button', { name: /show testimonial/i })
    expect(dots.length).toBe(3)

    await user.click(dots[1]!)
    expect(screen.getByText(/Professional and affordable/)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()

    await user.click(dots[2]!)
    expect(screen.getByText(/We have been using Keycraft/)).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()

    await user.click(dots[0]!)
    expect(screen.getByText(/Exceptional service/)).toBeInTheDocument()
  })
})
