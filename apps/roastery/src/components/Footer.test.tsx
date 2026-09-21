import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name and contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Roastery')).toBeInTheDocument()
    expect(screen.getByText(/\+1 \(555\) 926-BREW/)).toBeInTheDocument()
    expect(screen.getAllByText(/142 Roast Avenue/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the quick links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Home/i })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: /About/i })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: /^Menu$/i })).toHaveAttribute('href', '#menu')
    expect(screen.getByRole('link', { name: /Blog/i })).toHaveAttribute('href', '#blog')
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Made with Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Your Email Address/i)
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('shows success message for valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/Your Email Address/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })

  it('renders the copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/Roastery Coffee\. All rights reserved/)).toBeInTheDocument()
  })
})
