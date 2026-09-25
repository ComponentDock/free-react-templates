import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Melodica brand', () => {
    render(<Footer />)

    expect(screen.getByText('Melodica')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tracks/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /events/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /gallery/i })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)

    const componentDockLink = screen.getByRole('link', { name: /component dock/i })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDockLink).toHaveAttribute('target', '_blank')
    expect(componentDockLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the component dock attribution text', () => {
    render(<Footer />)
    expect(screen.getByText(/more templates at/i)).toBeInTheDocument()
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Melodica`))).toBeInTheDocument()
  })

  it('renders the tagline text', () => {
    render(<Footer />)
    expect(screen.getByText(/feel the rhythm/i)).toBeInTheDocument()
  })
})
