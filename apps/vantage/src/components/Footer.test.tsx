import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About, Navigation Links, Newsletter, and InstaFeed widgets', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'About Vantage' })).toBeInTheDocument()

    const nav = screen.getByRole('navigation', { name: 'Footer' })
    expect(nav.querySelectorAll('a')).toHaveLength(8)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pricing' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: 'InstaFeed' })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(8)

    expect(screen.getByText('Copyright © 2026 Vantage — All rights reserved')).toBeInTheDocument()
  })

  it('shows a thank-you message after subscribing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
