import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders Component Dock links', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link', { name: /component dock/i })
    expect(links.length).toBeGreaterThanOrEqual(2)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /vimeo/i })).toBeInTheDocument()
  })

  it('renders "More templates at Component Dock"', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })
})
