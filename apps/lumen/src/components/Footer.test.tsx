import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByText('Lumen')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Services', 'Works', 'Contact']) {
      expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
    }
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('renders back to top button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /back to top/i })).toBeInTheDocument()
  })
})
