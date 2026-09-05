import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/testimonial/i)).toBeInTheDocument()
    expect(screen.getByText(/some kind words from clients/i)).toBeInTheDocument()
  })

  it('renders initial testimonial quote and author', () => {
    render(<Testimonials />)
    expect(screen.getByText(/verdant is a pleasure to work with/i)).toBeInTheDocument()
    expect(screen.getByText(/mr\. nick jonas/i)).toBeInTheDocument()
    expect(screen.getByText(/ceo of navatech/i)).toBeInTheDocument()
  })

  it('navigates between testimonials via dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(3)
    await user.click(dots[1])
    expect(screen.getByText(/mr\. nazrul islam/i)).toBeInTheDocument()
    await user.click(dots[2])
    expect(screen.getByText(/mr\. jonas nick/i)).toBeInTheDocument()
  })
})
