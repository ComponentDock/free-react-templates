import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders About section', () => {
    render(<Footer />)
    expect(screen.getByText('About Paprika')).toBeInTheDocument()
  })

  it('renders Contact section with details', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('info@paprika.com')).toBeInTheDocument()
  })

  it('renders Recent Posts section', () => {
    render(<Footer />)
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
  })

  it('renders Gallery section', () => {
    render(<Footer />)
    expect(screen.getAllByText('Gallery').length).toBeGreaterThanOrEqual(1)
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    for (const link of ['Home', 'About', 'Menu', 'Gallery', 'Events', 'News', 'Contact']) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })
})
