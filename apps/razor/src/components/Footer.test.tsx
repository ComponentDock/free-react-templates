import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, quick links, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Razor/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('heading', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Info' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('shows contact details', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St\. Mountain View/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('renders the copyright bar with the current year', () => {
    render(<Footer />)
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}.*Component Dock`)),
    ).toBeInTheDocument()
  })
})
