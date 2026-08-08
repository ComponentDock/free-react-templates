import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading, a quote, the author, and star rating', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /What Customer Say About Us/i })).toBeInTheDocument()
    expect(screen.getByText(/Mark Alviro Wiens/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/rating/i)).toBeInTheDocument()
  })

  it('navigates quotes with next, previous, and dots (wrapping both ways)', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const first = screen.getByTestId('quote-text').textContent

    await user.click(screen.getByRole('button', { name: /next quote/i }))
    expect(screen.getByTestId('quote-text').textContent).not.toBe(first)

    await user.click(screen.getByRole('button', { name: /previous quote/i }))
    expect(screen.getByTestId('quote-text').textContent).toBe(first)

    // wrap backward from the first quote to the last
    await user.click(screen.getByRole('button', { name: /previous quote/i }))
    expect(screen.getByTestId('quote-text').textContent).not.toBe(first)

    // wrap forward back to the first quote
    await user.click(screen.getByRole('button', { name: /next quote/i }))
    expect(screen.getByTestId('quote-text').textContent).toBe(first)

    await user.click(screen.getByRole('button', { name: /Go to quote 2/i }))
    expect(screen.getByTestId('quote-text').textContent).not.toBe(first)
  })
})
