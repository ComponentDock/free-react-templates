import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Laurel' })).toBeInTheDocument()
  })

  it('renders quick links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    for (const link of ['About', 'Service', 'Team', 'Privacy Policy', 'Testimonials', 'Support']) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders the newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('allows typing in the newsletter email input', async () => {
    render(<Footer />)
    const user = userEvent.setup()
    const input = screen.getByLabelText(/email for newsletter/i)
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('newsletter form submission does not navigate away', async () => {
    render(<Footer />)
    const user = userEvent.setup()
    const button = screen.getByRole('button', { name: /subscribe/i })
    await user.click(button)
    // Still on the same page
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })
})
