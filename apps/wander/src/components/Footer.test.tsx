import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four widget columns with links and contact info', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-footer')
    expect(screen.getByRole('heading', { level: 3, name: 'Quick Link' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Subscribe' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms & Conditions' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Location' })).toBeInTheDocument()
    expect(screen.getByText(/98 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText('(+1) 435 3533')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
    expect(screen.getByText('Sign up for our newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email...')).toBeInTheDocument()
  })

  it('validates the newsletter email and confirms a valid subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Enter a valid email address')
    await user.clear(input)
    await user.type(input, 'traveler@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(input).toHaveValue('')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('shows the copyright bar with the Component Dock link and five social links', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Linkedin', 'Youtube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
