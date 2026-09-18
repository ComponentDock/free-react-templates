import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders 4 column headings', () => {
    render(<Footer />)

    // Use role heading to target h4 elements specifically
    expect(screen.getAllByRole('heading', { name: 'About' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('heading', { name: 'Links' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: 'Latest Blog' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Connect' })).toBeInTheDocument()
  })

  it('renders About column content', () => {
    render(<Footer />)

    expect(screen.getByText(/Placeboard helps you discover/)).toBeInTheDocument()
    expect(screen.getByText('123 Travel Lane, Wanderlust City')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@placeboard.com')).toBeInTheDocument()
  })

  it('renders Links column', () => {
    render(<Footer />)

    // Links column has About, Destination, Contact as <a> elements
    const aboutLinks = screen.getAllByText('About')
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Destination')).toBeInTheDocument()
    const contactLinks = screen.getAllByText('Contact')
    expect(contactLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders blog entries', () => {
    render(<Footer />)

    expect(screen.getByText('10 Hidden Gems in Europe')).toBeInTheDocument()
    expect(screen.getByText('Mar 15, 2026')).toBeInTheDocument()
    expect(screen.getByText('Budget Travel Tips for Asia')).toBeInTheDocument()
    expect(screen.getByText('Best Beaches in the Caribbean')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)

    const dockLink = screen.getByText('Component Dock')
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dockLink).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)

    const year = new Date().getFullYear().toString()
    // Use a specific regex to match only the copyright line
    expect(screen.getByText(new RegExp(`©.*${year}.*Placeboard`))).toBeInTheDocument()
  })
})
