import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    const spy = vi.spyOn(document, 'title', 'set')
    render(<App />)
    expect(spy).toHaveBeenCalledWith('SkyLens — Drone Photography Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    // Navbar + Footer both show SkyLens
    expect(screen.getAllByText('SkyLens').length).toBeGreaterThanOrEqual(2)
    // Hero
    expect(screen.getByRole('heading', { name: /capturing every angle/i })).toBeInTheDocument()
    // About
    expect(
      screen.getByRole('heading', { name: /hassle-free drone photography/i }),
    ).toBeInTheDocument()
    // Services
    expect(screen.getByRole('heading', { name: /what we offer/i })).toBeInTheDocument()
    // Video
    expect(screen.getByRole('heading', { name: /how we work/i })).toBeInTheDocument()
    // Recent Projects
    expect(screen.getByRole('heading', { name: /recent projects/i })).toBeInTheDocument()
    // Second Services (also in Footer)
    expect(screen.getAllByText('Drone Mapping').length).toBeGreaterThanOrEqual(2)
    // Testimonials
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    // Contact
    expect(screen.getByRole('heading', { name: /get a quote/i })).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
