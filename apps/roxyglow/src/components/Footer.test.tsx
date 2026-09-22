import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeDefined()
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/More templates at/)).toBeDefined()
    expect(screen.getByText(/Component Dock/)).toBeDefined()
  })

  it('renders the RoxyGlow brand section', () => {
    render(<Footer />)
    expect(screen.getByText('RoxyGlow')).toBeDefined()
  })

  it('renders Useful Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeDefined()
    expect(screen.getByText('Sitemaps')).toBeDefined()
    expect(screen.getByText('Categories')).toBeDefined()
  })

  it('renders Privacy section', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy')).toBeDefined()
    expect(screen.getByText('Privacy Policy')).toBeDefined()
    expect(screen.getByText('Terms of Use')).toBeDefined()
  })

  it('renders Have a Questions section', () => {
    render(<Footer />)
    expect(screen.getByText('Have a Questions')).toBeDefined()
    expect(screen.getByText(/info@roxyglow.com/)).toBeDefined()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeDefined()
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
  })
})
