import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(/We Craft Awesome Web And/)).toBeInTheDocument()
    expect(screen.getByText('Services', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Portfolio', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Crafters', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Stories', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Offer', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Expertise', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText('Contact', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Musecraft — Creative Digital Agency')
  })
})
