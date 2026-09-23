import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, tagline and social links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Navigation')).toBeInTheDocument()
    expect(screen.getByText('Quick Contact')).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('submits the contact form successfully', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Your name'), 'John')
    await user.type(screen.getByLabelText('Your email'), 'john@example.com')
    await user.type(screen.getByLabelText('Your message'), 'Hello!')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent(/Message sent/i)
  })

  it('does not submit with empty fields', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    // Form should still be visible (no success message)
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
  })
})
