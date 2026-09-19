import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Cellarly wordmark', () => {
    render(<App />)
    const matches = screen.getAllByText('Cellarly')
    expect(matches.length).toBeGreaterThanOrEqual(2)
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByText(/Drink/)).toBeInTheDocument()
    expect(screen.getByText(/Moments/)).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<App />)
    expect(screen.getByText('Online Support 24/7')).toBeInTheDocument()
    expect(screen.getByText('Money Back Guarantee')).toBeInTheDocument()
  })

  it('renders products section', () => {
    render(<App />)
    expect(screen.getByText('Tastefully Yours')).toBeInTheDocument()
  })

  it('renders testimonials', () => {
    render(<App />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
  })

  it('renders blog section', () => {
    render(<App />)
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
  })

  it('renders footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Cellarly — Premium Spirits & Fine Beverages')
  })
})
