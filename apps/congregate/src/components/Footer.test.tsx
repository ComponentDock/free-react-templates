import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, blurb and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Congregate home/ })).toBeInTheDocument()
    expect(screen.getByText(/A welcoming community in Austin, TX/)).toBeInTheDocument()

    for (const name of ['Facebook', 'Instagram', 'YouTube']) {
      const social = screen.getByRole('link', { name })
      expect(social).toHaveAttribute('href', expect.stringContaining(name.toLowerCase()))
    }
  })

  it('shows the Visit, Connect and Resources link columns', () => {
    render(<Footer />)

    for (const column of ['Visit', 'Connect', 'Resources']) {
      expect(screen.getByRole('heading', { level: 3, name: column })).toBeInTheDocument()
    }

    for (const link of [
      'Service Times',
      'Plan Your Visit',
      'What to Expect',
      'Directions',
      'About Us',
      'Join a Group',
      'Serve',
      'Give',
      'Watch Sermons',
      'Podcast',
      'Hope City Kids',
      'Contact Us',
    ]) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('shows the contact details', () => {
    render(<Footer />)

    const email = screen.getByRole('link', { name: 'hello@congregate.church' })
    expect(email).toHaveAttribute('href', 'mailto:hello@congregate.church')
    const phone = screen.getByRole('link', { name: '(555) 234-5678' })
    expect(phone).toHaveAttribute('href', 'tel:+15552345678')
    expect(screen.getByText('1200 Grace Avenue, Austin, TX 78701')).toBeInTheDocument()
  })

  it('shows the bottom bar with copyright and legal links', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Congregate. All rights reserved./)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Terms of Use' })).toBeInTheDocument()
  })
})
