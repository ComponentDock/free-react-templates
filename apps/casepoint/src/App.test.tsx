import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders Casepoint logo in header', () => {
    render(<App />)
    const logos = screen.getAllByText('Casepoint')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders hero heading', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /don.*feel helpless/i }),
    ).toBeInTheDocument()
  })

  it('renders practice areas', () => {
    render(<App />)
    expect(screen.getAllByText('Health Law').length).toBeGreaterThanOrEqual(1)
  })

  it('renders about section', () => {
    render(<App />)
    expect(screen.getByText('About Our Law agency')).toBeInTheDocument()
  })

  it('renders contact form', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
  })

  it('renders case studies tabs', () => {
    render(<App />)
    expect(screen.getByRole('tab', { name: 'Accident Law' })).toBeInTheDocument()
  })

  it('renders CTA banner', () => {
    render(<App />)
    expect(screen.getByText(/searching for.*consultant/i)).toBeInTheDocument()
  })

  it('renders team section', () => {
    render(<App />)
    expect(screen.getByText('Ethan Welch')).toBeInTheDocument()
  })

  it('renders testimonial', () => {
    render(<App />)
    expect(screen.getByText('Oliva Jems')).toBeInTheDocument()
  })

  it('renders blog section', () => {
    render(<App />)
    expect(screen.getByText('Understanding Your Legal Rights')).toBeInTheDocument()
  })

  it('renders footer with Component Dock', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
