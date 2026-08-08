import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand, blurb and social links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Blastoff home/ })).toBeInTheDocument()
    expect(screen.getByText(/The modern development platform/)).toBeInTheDocument()

    for (const label of ['GitHub', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the three link columns', () => {
    render(<Footer />)

    for (const heading of ['Product', 'Resources', 'Company']) {
      expect(screen.getByRole('heading', { name: heading })).toBeInTheDocument()
    }
    for (const link of [
      'Features',
      'Pricing',
      'Changelog',
      'Roadmap',
      'Documentation',
      'API Reference',
      'Blog',
      'Tutorials',
      'About',
      'Careers',
      'Press',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the newsletter form and confirms a subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Stay Updated' })).toBeInTheDocument()

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'founder@startup.dev')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText(/Thanks for subscribing/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Subscribe' })).not.toBeInTheDocument()
  })

  it('shows the copyright line and legal links', () => {
    render(<Footer />)

    expect(screen.getByText(/Blastoff. All rights reserved/)).toBeInTheDocument()
    for (const link of ['Privacy Policy', 'Terms of Service', 'Style Guide']) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
})
