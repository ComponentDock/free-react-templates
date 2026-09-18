import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Sitecraft — Construction Company Template')
  })

  it('renders all major sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation', { name: 'Main navigation' })).toBeInTheDocument()
    expect(screen.getByLabelText('Hero')).toBeInTheDocument()
    expect(screen.getByLabelText('What We Offer')).toBeInTheDocument()
    expect(screen.getByLabelText('Our Projects')).toBeInTheDocument()
    expect(screen.getByLabelText('Statistics')).toBeInTheDocument()
    expect(screen.getByLabelText('Our Team')).toBeInTheDocument()
    expect(screen.getByLabelText('Testimonials')).toBeInTheDocument()
    expect(screen.getByLabelText('Newsletter')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the Sitecraft logo in the navbar', () => {
    render(<App />)

    const logoLinks = screen.getAllByText('Sitecraft')
    expect(logoLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Component Dock link in the footer', () => {
    render(<App />)

    const cdLink = screen.getByRole('link', { name: /component dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
