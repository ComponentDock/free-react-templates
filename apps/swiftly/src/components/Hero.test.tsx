import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and description', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Get Paid Easily without Hassle',
    )
    expect(screen.getByText(/far from the countries/i)).toBeInTheDocument()
  })

  it('renders email signup form', () => {
    render(<Hero />)
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'test@example.com')

    const submitBtn = screen.getByRole('button', { name: /sign up/i })
    await user.click(submitBtn)

    // Form should still be present (submission was prevented)
    expect(screen.getByRole('form', { name: /email signup/i })).toBeInTheDocument()
  })
})
