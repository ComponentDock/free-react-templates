import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Us section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/family-owned business/i)).toBeInTheDocument()
    expect(screen.getByText(/Mon – Fri: 7am – 8pm/)).toBeInTheDocument()
  })

  it('renders the Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders the Follow Us section with social links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /More templates at Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
    expect(screen.getByText(/Loaf Bakery\. All rights reserved/)).toBeInTheDocument()
  })

  it('has a dark navy background', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveClass('bg-navy')
  })

  it('allows subscribing via form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Your email')
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  })
})
