import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the Beacon template with all major sections', () => {
    render(<App />)

    expect(screen.getAllByText('Beacon').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/We Create Awesome/)).toBeInTheDocument()
    expect(screen.getAllByText('Amazing studio').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('We are so Creative')).toBeInTheDocument()
    expect(screen.getByText('see What we offer')).toBeInTheDocument()
    expect(screen.getByText('Stay in touch')).toBeInTheDocument()
    expect(screen.getByText("Let's work together!")).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Beacon — Photography Portfolio Template')
  })
})
