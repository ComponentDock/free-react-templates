import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the crest, contact list and footer nav', () => {
    render(<Footer />)
    expect(screen.getByText('Matchday FC')).toBeInTheDocument()
    expect(screen.getByText('Address')).toBeInTheDocument()
    expect(screen.getByText('123 Championship Way, London, UK')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('E-mail')).toBeInTheDocument()
    for (const label of ['Home', 'The Team', 'Tickets', 'News', 'Contact']) {
      expect(screen.getAllByRole('link', { name: label }).length).toBeGreaterThan(0)
    }
  })

  it('links Component Dock in the bottom bar with a copyright notice', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows an error for an invalid newsletter email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('subscribes with a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText('Email address'), 'fan@example.com')
    await user.click(screen.getByRole('button', { name: 'Submit' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })

  it('renders the decorative footer player photo', () => {
    render(<Footer />)
    expect(screen.getByAltText('')).toHaveAttribute(
      'src',
      expect.stringContaining('matchday-footer-player'),
    )
  })
})
