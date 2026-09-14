import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    const ventures = screen.getAllByText('Venture')
    expect(ventures.length).toBeGreaterThan(0)
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Venture — Business Startup Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/Business Synergy via/)).toBeInTheDocument()
    expect(screen.getByText('Strategic Planning')).toBeInTheDocument()
    expect(screen.getByText('User Interface')).toBeInTheDocument()
    expect(screen.getByText('Features That You Will Get')).toBeInTheDocument()
    expect(screen.getByText(/Send us a message/)).toBeInTheDocument()
  })

  it('renders the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('main')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
