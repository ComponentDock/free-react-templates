import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Pavilion brand and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Pavilion/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Globe/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Behance/i })).toBeInTheDocument()
  })

  it('renders Quick Links and Reservations headings', () => {
    render(<Footer />)
    expect(screen.getByText(/Quick Links/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Reservations/i })).toBeInTheDocument()
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('rejects an invalid email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email address/i)
    const submit = screen.getByRole('button', { name: /Subscribe/i })

    await user.type(input, 'not-an-email')
    await user.click(submit)
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    await user.clear(input)
    await user.type(input, 'test@example.com')
    await user.click(submit)
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })
})
