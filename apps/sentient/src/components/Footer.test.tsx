import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand, blurb, social links, link columns, newsletter and legal row', () => {
    render(<Footer />)

    expect(screen.getByText('Sentient')).toBeInTheDocument()
    expect(
      screen.getByText(/the AI platform for building intelligent applications/i),
    ).toBeInTheDocument()

    for (const name of ['X', 'GitHub', 'LinkedIn', 'Discord']) {
      expect(screen.getByRole('link', { name: `Sentient on ${name}` })).toBeInTheDocument()
    }

    for (const column of ['Product', 'Resources', 'Company']) {
      expect(screen.getByRole('heading', { level: 2, name: column })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Capabilities' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Community' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Careers' })).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 2, name: 'Stay Updated' })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()

    for (const legal of ['Privacy Policy', 'Terms of Service', 'Style Guide']) {
      expect(screen.getByRole('link', { name: legal })).toBeInTheDocument()
    }
    expect(screen.getByText(/© 2026 Sentient/i)).toBeInTheDocument()
  })

  it('shows an error when submitting an empty or invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Please enter a valid email address.')).toBeInTheDocument()
  })

  it('subscribes a valid email and swaps the form for a success message', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })

  it('keeps the newsletter accessible from the newsletter region', () => {
    render(<Footer />)
    const region = screen.getByRole('region', { name: 'Stay Updated' })
    expect(within(region).getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })
})
