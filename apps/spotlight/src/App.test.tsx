import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Spotlight — Business Directory Template')
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getByText('Spotlight')).toBeInTheDocument()
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByText('Find Nearby')).toBeInTheDocument()
  })

  it('renders the Most Visited Places section', () => {
    render(<App />)
    expect(screen.getByText('Most Visited Places')).toBeInTheDocument()
  })

  it('renders the Popular Categories section', () => {
    render(<App />)
    expect(screen.getByText('Popular Categories')).toBeInTheDocument()
  })

  it('renders the Why Us section', () => {
    render(<App />)
    expect(screen.getByText('Why Us')).toBeInTheDocument()
  })

  it('renders the Testimonials section', () => {
    render(<App />)
    expect(screen.getAllByText('Testimonials').length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Blog section', () => {
    render(<App />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders the FAQ section', () => {
    render(<App />)
    expect(screen.getByText('Frequently Asked Questions')).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<App />)
    expect(screen.getByText("Let's get started. Create your account")).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
