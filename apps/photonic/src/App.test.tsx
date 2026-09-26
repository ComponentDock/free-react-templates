import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all main sections', () => {
    render(<App />)
    expect(screen.getByText('photonic')).toBeInTheDocument()
    expect(screen.getByText(/Ben Botsford/)).toBeInTheDocument()
    expect(screen.getAllByText('Nature Photography').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('My Photography')).toBeInTheDocument()
    expect(screen.getByText(/Photonic\. All rights reserved/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Photonic — Photography Portfolio Template')
  })

  it('renders Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
