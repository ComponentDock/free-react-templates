import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders 4 columns: About Us, Categories, Latest Episodes, Follow Us', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Latest Episodes' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
  })

  it('shows category links', () => {
    render(<Footer />)
    for (const cat of ['Entrepreneurship', 'Media', 'Tech', 'Tutorials']) {
      expect(screen.getByRole('link', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows latest episode entries', () => {
    render(<Footer />)
    expect(screen.getByText(/Episode 205/)).toBeInTheDocument()
    expect(screen.getByText(/Episode 204/)).toBeInTheDocument()
  })

  it('shows social icon links', () => {
    render(<Footer />)
    for (const s of ['Facebook', 'Twitter', 'Pinterest', 'Instagram', 'YouTube']) {
      expect(screen.getByRole('link', { name: s })).toBeInTheDocument()
    }
  })

  it('shows App Store and Google Play links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'App Store' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google Play' })).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
