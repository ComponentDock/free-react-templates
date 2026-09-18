import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Roster').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Explore Your City')
    expect(screen.getByText('Explore Top Cities')).toBeInTheDocument()
    expect(screen.getByText('Popular Directory')).toBeInTheDocument()
    expect(screen.getByText('How It Works')).toBeInTheDocument()
    expect(screen.getByText('New Directory')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Roster — Directory Listing Template')
  })

  it('contains Component Dock link in footer', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
