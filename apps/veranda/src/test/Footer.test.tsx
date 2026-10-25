import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { CONTACT, FOOTER_CHANNELS, FOOTER_COMPANY, FOOTER_SUPPORT } from '../data'

describe('Footer', () => {
  it('renders the four blocks, the real contact details and the channel columns', () => {
    render(<Footer />)

    expect(
      screen.getByText(/A moderated community for people who build in public/),
    ).toBeInTheDocument()
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CONTACT.phoneLabel })).toHaveAttribute(
      'href',
      CONTACT.phoneHref,
    )
    expect(screen.getByRole('link', { name: CONTACT.email })).toHaveAttribute(
      'href',
      `mailto:${CONTACT.email}`,
    )

    for (const link of [...FOOTER_CHANNELS, ...FOOTER_COMPANY, ...FOOTER_SUPPORT]) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.target)
    }

    expect(screen.queryByText('Hot Desk')).not.toBeInTheDocument()
  })

  it('gives the three social tiles real destinations', () => {
    render(<Footer />)

    for (const name of ['Veranda on X', 'Veranda on GitHub', 'Veranda RSS feed']) {
      const link = screen.getByRole('link', { name })
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link.getAttribute('href')).toMatch(/^https:\/\//)
    }
  })

  it('carries the house Component Dock credit in the legal bar', () => {
    render(<Footer />)

    expect(screen.getByText('© 2026 Veranda. All rights reserved.')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('confirms a newsletter signup without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const field = screen.getByLabelText('Email address')
    expect(field).toBeRequired()

    await user.type(field, 'reader@veranda.example')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks — check your inbox to confirm.')
  })
})
