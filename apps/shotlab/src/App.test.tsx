import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('ShotLab — Photography Portfolio Template')
  })

  it('renders the Sidebar', () => {
    render(<App />)
    expect(screen.getByText('ShotLab')).toBeInTheDocument()
  })

  it('renders the PortfolioGrid', () => {
    render(<App />)
    expect(screen.getAllByText('View Portfolio')).toHaveLength(9)
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getAllByText(/John Carter/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Pricing section', () => {
    render(<App />)
    expect(screen.getByText('My Pricing')).toBeInTheDocument()
  })

  it('renders the Contact section', () => {
    render(<App />)
    expect(screen.getByText('Contact Me')).toBeInTheDocument()
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    const links = screen.getAllByText('Component Dock')
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
