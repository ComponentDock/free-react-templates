import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Homefront brand', () => {
    render(<App />)
    expect(screen.getAllByText('Homefront').length).toBeGreaterThanOrEqual(1)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Homefront — Real Estate Template')
  })

  it('renders the hero section with properties', () => {
    render(<App />)
    expect(screen.getByText('Florida 5, Pinecrest, FL')).toBeInTheDocument()
  })

  it('renders the search section', () => {
    render(<App />)
    expect(screen.getByText('Search Property')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('Find Places Anywhere In The World')).toBeInTheDocument()
  })

  it('renders the featured properties section', () => {
    render(<App />)
    expect(screen.getByText('Recent Properties')).toBeInTheDocument()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the newsletter section', () => {
    render(<App />)
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
