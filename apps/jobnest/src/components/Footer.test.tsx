import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo, social links, company links, category links, newsletter, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Logo
    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent('JobNest')

    // Social links
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    // Company links
    for (const link of ['About Us', 'Register', 'Jobs', 'Blog']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }

    // Category links
    for (const link of ['Design & Creative', 'Marketing', 'Administration', 'Customer Service']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }

    // Newsletter
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Email for newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    // Copyright with Component Dock
    expect(screen.getByText(/© 2026 All rights reserved/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('prevents default form submission on newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByRole('textbox', { name: 'Email for newsletter' })
    await user.type(emailInput, 'test@example.com')

    const submitBtn = screen.getByRole('button', { name: 'Subscribe' })
    const form = submitBtn.closest('form')!
    const preventDefault = vi.fn()
    form.addEventListener('submit', (e) => e.preventDefault())
    form.addEventListener('submit', preventDefault)

    await user.click(submitBtn)
    expect(preventDefault).toHaveBeenCalled()
  })
})
