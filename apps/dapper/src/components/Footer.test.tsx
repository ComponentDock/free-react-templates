import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, about blurb, and quick links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Dapper/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    const quickLinks = screen.getByRole('heading', { name: 'Quick Links' }).closest('div')
    expect(quickLinks).not.toBeNull()
    for (const label of ['Home', 'About', 'Services', 'Barbers', 'Pricing', 'Blog']) {
      expect(within(quickLinks!).getByRole('link', { name: label })).toHaveAttribute(
        'href',
        expect.stringMatching(/^#/),
      )
    }
  })

  it('renders the newsletter form and submits without reloading', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByRole('textbox', { name: 'Enter email address' })
    await user.type(input, 'guest@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(input).toHaveValue('guest@example.com')
  })

  it('renders social links for GitHub, X, and LinkedIn', () => {
    render(<Footer />)

    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })
})
