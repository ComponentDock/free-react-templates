import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByText('Vizion')).toBeInTheDocument()
    expect(screen.getByText('Hello This is Vizion')).toBeInTheDocument()
    expect(screen.getByText('Creative Designer')).toBeInTheDocument()
    expect(screen.getByText('Service Provided')).toBeInTheDocument()
    expect(screen.getByText('Portfolios')).toBeInTheDocument()
    expect(screen.getByText('About me')).toBeInTheDocument()
    expect(screen.getByText('Total Projects')).toBeInTheDocument()
    expect(screen.getByText("Let's discuss for a project")).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<App />)
    expect(screen.getByText('Graphic Design')).toBeInTheDocument()
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Mobile App')).toBeInTheDocument()
  })

  it('renders portfolio items', () => {
    render(<App />)
    const portfolioImages = screen.getAllByAltText('Product Design')
    expect(portfolioImages).toHaveLength(5)
  })

  it('renders testimonial', () => {
    render(<App />)
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<App />)
    expect(screen.getByText('520')).toBeInTheDocument()
    expect(screen.getByText('244')).toBeInTheDocument()
    expect(screen.getByText('95')).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<App />)
    // "About" appears in both navbar and footer
    const aboutLinks = screen.getAllByRole('link', { name: /about/i })
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2)
    const servicesLinks = screen.getAllByRole('link', { name: /services/i })
    expect(servicesLinks.length).toBeGreaterThanOrEqual(2)
    const portfolioLinks = screen.getAllByRole('link', { name: /portfolio/i })
    expect(portfolioLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('renders Contact Me button in navbar', () => {
    render(<App />)
    expect(screen.getAllByText('Contact Me')).toHaveLength(1)
  })

  it('renders More Folio button', () => {
    render(<App />)
    expect(screen.getByText('More Folio')).toBeInTheDocument()
  })

  it('renders Download CV button', () => {
    render(<App />)
    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders Start Talking button', () => {
    render(<App />)
    expect(screen.getByText('Start Talking')).toBeInTheDocument()
  })
})
