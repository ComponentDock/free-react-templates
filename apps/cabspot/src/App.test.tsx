import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('CabSpot — Taxi Booking Template')
  })

  it('renders the Navbar', () => {
    render(<App />)
    expect(screen.getByText('CabSpot')).toBeInTheDocument()
  })

  it('renders the Hero section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Need a ride? Just Call')
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByText('Globally Connected by Large Network')).toBeInTheDocument()
  })

  it('renders the Services section', () => {
    render(<App />)
    expect(screen.getByText('What Services We Offer')).toBeInTheDocument()
  })

  it('renders the Gallery section', () => {
    render(<App />)
    expect(screen.getByText('Image Gallery')).toBeInTheDocument()
  })

  it('renders the Reviews section', () => {
    render(<App />)
    expect(screen.getByText("Client's Reviews")).toBeInTheDocument()
  })

  it('renders the CTA Banner', () => {
    render(<App />)
    expect(screen.getByText('Experience Great Support')).toBeInTheDocument()
  })

  it('renders the Blog section', () => {
    render(<App />)
    expect(screen.getByText('Latest News from our Blog')).toBeInTheDocument()
  })

  it('renders the Footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
