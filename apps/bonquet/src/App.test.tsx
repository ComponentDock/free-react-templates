import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /meet, eat & enjoy/i }),
    ).toBeInTheDocument()
  })

  it('renders navigation links in the navbar', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    // Home appears in both desktop and mobile nav
    const homeLinks = banner.querySelectorAll('a[href="#home"]')
    expect(homeLinks.length).toBeGreaterThanOrEqual(2)
    expect(banner.querySelector('a[href="#menu"]')).toBeInTheDocument()
    expect(banner.querySelector('a[href="#about"]')).toBeInTheDocument()
    expect(banner.querySelector('a[href="#blog"]')).toBeInTheDocument()
    expect(banner.querySelector('a[href="#contact"]')).toBeInTheDocument()
  })

  it('renders the reservation form', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Sent Request' })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const cdLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
