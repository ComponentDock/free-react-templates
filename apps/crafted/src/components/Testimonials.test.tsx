import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first quote with its attribution', () => {
    render(<Testimonials />)

    expect(screen.queryByText(/Crafted delivered beyond our expectations/)).not.toBeInTheDocument()
    const figure = screen.getByRole('figure', { name: 'Marvel Maison' })
    expect(figure.textContent).toMatch(/Chief Executive, Amazon/)
  })

  it('navigates between quotes with the arrows and dots', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)

    const firstQuote = screen.getByRole('figure', { name: 'Marvel Maison' })
    expect(firstQuote.textContent).toMatch(/Lorem ipsum dolor sit amet/)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByRole('figure', { name: 'Marvel Maison' }).textContent).toMatch(
      /delivered beyond our expectations/,
    )

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByRole('figure', { name: 'Marvel Maison' }).textContent).toMatch(
      /Lorem ipsum dolor sit amet/,
    )

    await user.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByRole('figure', { name: 'Marvel Maison' }).textContent).toMatch(
      /delivered beyond our expectations/,
    )
  })
})
