import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders social icon links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /pinterest/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('renders the BytePress logo', () => {
    render(<Footer />)
    expect(screen.getByText(/Byte/)).toBeInTheDocument()
    expect(screen.getByText(/Press/)).toBeInTheDocument()
  })

  it('renders nav links', () => {
    render(<Footer />)
    for (const link of navLinks) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})

const navLinks = ['Home', 'Tech', 'Innovation', 'Videos', 'World', 'Contact']
