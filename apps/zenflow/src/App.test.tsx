import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the full page with all sections', () => {
    render(<App />)
    expect(screen.getAllByText('Zenflow').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Business Theme Creator')).toBeInTheDocument()
    expect(screen.getByText('We are Theme Creator')).toBeInTheDocument()
    expect(screen.getByText('Services We Provides')).toBeInTheDocument()
    expect(screen.getByText('Meet Our Team')).toBeInTheDocument()
    expect(screen.getByText('Our Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Our Latest News')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Zenflow - Business & Tech Agency Template')
  })
})
