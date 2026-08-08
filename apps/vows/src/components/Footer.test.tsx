import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand blurb and the three link columns', () => {
    render(<Footer />)

    expect(screen.getByText('Vows')).toBeInTheDocument()
    expect(
      screen.getByText(/Crafting unforgettable wedding experiences with elegance/),
    ).toBeInTheDocument()

    for (const title of ['Services', 'Information', 'Connect', 'Mailing List']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }

    for (const link of [
      'Full Planning',
      'Day-of Coordination',
      'Design & Decor',
      'Venue Selection',
      'FAQ',
      'Testimonials',
      'Press',
      'Blog',
      'Instagram',
      'Pinterest',
      'Contact',
    ]) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('shows the Stay Inspired newsletter and subscribes', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByText('Stay Inspired')).toBeInTheDocument()

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'sarah@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(
      screen.getByText(/Thanks for subscribing — wedding inspiration is on its way!/),
    ).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('renders the copyright bar with legal links', () => {
    render(<Footer />)

    expect(screen.getByText('© 2026 Vows. All rights reserved.')).toBeInTheDocument()
    for (const link of ['Privacy Policy', 'Terms of Service', 'Style Guide']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
    }
  })
})
