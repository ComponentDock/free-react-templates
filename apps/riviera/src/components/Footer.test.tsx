import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about widget with the text logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Riviera' })).toHaveAttribute('href', '#home')
    expect(screen.getByText(/luxury hotel & spa/i)).toBeInTheDocument()
  })

  it('renders the newsletter widget', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email Here')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders the contact info widget', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByText('1525 Boring Lane, Los Angeles, CA')).toBeInTheDocument()
    expect(screen.getByText('+1 (603)535-4592')).toBeInTheDocument()
  })

  it('renders the link row', () => {
    render(<Footer />)
    for (const label of ['Home', 'About', 'Rooms', 'Facilities', 'News', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the copyright bar with a Component Dock credit link', () => {
    render(<Footer />)
    expect(screen.getByText(/2026 Riviera\. All rights reserved\./)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: /Component Dock/i })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
