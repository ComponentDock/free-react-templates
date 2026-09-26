import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Lumiere — Photography Portfolio Template')
  })

  it('renders the Sidebar', () => {
    render(<App />)
    expect(screen.getByText('Lumiere')).toBeInTheDocument()
  })

  it('renders the PortfolioGrid', () => {
    render(<App />)
    expect(screen.getAllByText('View Portfolio')).toHaveLength(9)
  })

  it('renders the Footer with Component Dock link', () => {
    render(<App />)
    const links = screen.getAllByText('Component Dock')
    expect(links.length).toBeGreaterThanOrEqual(1)
    expect(links[0]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
