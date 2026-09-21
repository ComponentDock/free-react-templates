import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByLabelText('Bokeh')).toBeDefined()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toBeDefined()
  })

  it('renders the portfolio section', () => {
    render(<App />)
    expect(screen.getByText(/Recent/)).toBeDefined()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('Nature Photography')).toBeDefined()
  })

  it('renders the pricing section', () => {
    render(<App />)
    expect(screen.getAllByText('Wedding').length).toBeGreaterThan(0)
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByText(/Introduce About/)).toBeDefined()
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Sarah Johnson')).toBeDefined()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByText('Component Dock')
    expect((link as HTMLAnchorElement).href).toBe('https://www.componentdock.com/')
  })
})
