import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Us, Contact Info, Quick Links, and Studio Hours columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Studio Hours' })).toBeInTheDocument()

    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@mortar.studio')).toBeInTheDocument()

    for (const label of ['Home', 'Services', 'About', 'Portfolio', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the copyright line', () => {
    render(<Footer />)

    const componentDockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(componentDockLink).toBeInTheDocument()
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('shows the current year in the copyright line', () => {
    render(<Footer />)

    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Mortar`))).toBeInTheDocument()
  })
})
