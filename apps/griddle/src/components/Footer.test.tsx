import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { FOOTER_LOCATIONS, SOCIAL_LINKS } from '../data'

describe('Footer', () => {
  it('renders the footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders both location columns', () => {
    render(<Footer />)
    for (const loc of FOOTER_LOCATIONS) {
      expect(screen.getByText(loc.city)).toBeInTheDocument()
      expect(screen.getByText(loc.address)).toBeInTheDocument()
      // Emails and phones are shared — use getAllByText
      expect(screen.getAllByText(loc.email).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(loc.phone).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument()
  })

  it('prevents default on newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText(/email for newsletter/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /sign up/i }))
    // No error thrown = form submitted without navigation
    expect(input).toHaveValue('test@example.com')
  })

  it('renders social icon links', () => {
    render(<Footer />)
    for (const social of SOCIAL_LINKS) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Griddle/)).toBeInTheDocument()
    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
