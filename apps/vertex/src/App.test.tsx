import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByText(/We Craft Awesome Web/i)).toBeInTheDocument()
    // Use heading role for section titles to avoid nav link duplicates
    expect(screen.getByRole('heading', { level: 2, name: /services/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /crafters/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /stories/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /offer/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /expertise/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /contact/i })).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/i)).toBeInTheDocument()
  })

  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Vertex — Creative Digital Agency')
  })
})
