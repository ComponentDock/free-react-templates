import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('ListNest')).toBeInTheDocument()
    expect(screen.getByText('Discover great places in New York')).toBeInTheDocument()
    expect(screen.getByText('What do you need to find?')).toBeInTheDocument()
    expect(screen.getByText('Featured Places')).toBeInTheDocument()
    expect(screen.getByText('Browse Categories')).toBeInTheDocument()
    expect(screen.getByText('Reach millions of People')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('ListNest — Directory & Listing Template')
  })
})
