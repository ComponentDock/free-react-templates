import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { contactLinks, footerServices, quickLinks } from '../data'

describe('Footer', () => {
  it('renders the four columns with links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(
      within(footer).getByRole('heading', { level: 3, name: 'Subscribe Newsletter' }),
    ).toBeInTheDocument()
    expect(
      within(footer).getByRole('heading', { level: 3, name: 'Quick Links' }),
    ).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { level: 3, name: 'Services' })).toBeInTheDocument()
    expect(
      within(footer).getByRole('heading', { level: 3, name: 'Contact Us' }),
    ).toBeInTheDocument()

    for (const label of quickLinks) {
      expect(within(footer).getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of footerServices) {
      expect(within(footer).getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of contactLinks) {
      expect(within(footer).getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of ['Facebook', 'Instagram', 'LinkedIn', 'YouTube']) {
      expect(within(footer).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows an error for an invalid email and recovers on typing', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    await user.type(input, '@good.co')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(input).toHaveAttribute('aria-invalid', 'false')
  })

  it('shows a confirmation state after a valid email is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: /Subscribe/ }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByRole('textbox', { name: 'Email address' })).not.toBeInTheDocument()
  })

  it('renders the copyright bar with a Component Dock link and a tel-safe social set', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/Copyright © 2026 All rights reserved/)).toBeInTheDocument()
    const dock = within(footer).getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    for (const label of ['Facebook', 'Instagram', 'LinkedIn', 'YouTube']) {
      expect(within(footer).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        expect.stringMatching(/^https:\/\//),
      )
    }
  })
})
