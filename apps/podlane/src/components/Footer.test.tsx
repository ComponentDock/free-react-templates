import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo', () => {
    render(<Footer />)
    const logos = screen.getAllByText('podcast')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Tags column', () => {
    render(<Footer />)
    expect(screen.getByText('Tags')).toBeInTheDocument()
    expect(screen.getByText('music')).toBeInTheDocument()
    expect(screen.getByText('art')).toBeInTheDocument()
    expect(screen.getByText('technology')).toBeInTheDocument()
  })

  it('renders Latest Episodes column', () => {
    render(<Footer />)
    expect(screen.getByText('Latest Episodes')).toBeInTheDocument()
    expect(screen.getByText(/Season 4 Episode 48/)).toBeInTheDocument()
    expect(screen.getByText(/Season 4 Episode 47/)).toBeInTheDocument()
    expect(screen.getByText(/Season 4 Episode 46/)).toBeInTheDocument()
  })

  it('renders Instagram gallery', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
    const galleryImages = screen.getAllByAltText(/Instagram/)
    expect(galleryImages.length).toBe(5)
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })
})
