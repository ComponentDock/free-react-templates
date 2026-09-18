import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all 4 link columns', () => {
    render(<Footer />)
    for (const heading of ['Top Products', 'Quick Links', 'Features', 'Resources']) {
      expect(screen.getByText(heading)).toBeInTheDocument()
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

  it('renders footer links with correct hrefs', () => {
    render(<Footer />)
    expect(screen.getByText('Course Browser')).toHaveAttribute('href', '#')
    expect(screen.getByText('Home')).toHaveAttribute('href', '#')
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
