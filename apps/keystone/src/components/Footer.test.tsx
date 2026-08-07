import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the wordmark and blurb', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /^Keystone/ })).toBeInTheDocument()
    expect(screen.getByText(/architecture studio/i)).toBeInTheDocument()
  })

  it('renders the link columns', () => {
    render(<Footer />)

    for (const column of ['Quick Links', 'New Products', 'Support']) {
      expect(screen.getByRole('heading', { level: 3, name: column })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'FAQ' })).toBeInTheDocument()
  })

  it('renders the social links', () => {
    render(<Footer />)

    for (const label of ['Facebook', 'Twitter', 'LinkedIn', 'YouTube']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the copyright line', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(/© 2026 Keystone\. All rights reserved/i)).toBeInTheDocument()
  })
})
