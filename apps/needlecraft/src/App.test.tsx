import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getAllByText(/Needlecraft/).length).toBeGreaterThan(0)
    expect(screen.getByText(/Improve your overall/)).toBeInTheDocument()
    expect(screen.getByText(/Why Choose Us/)).toBeInTheDocument()
    expect(screen.getByText(/Happy Customers/)).toBeInTheDocument()
    expect(screen.getByText(/News & Tips/)).toBeInTheDocument()
    expect(screen.getByText(/What are you waiting for/)).toBeInTheDocument()
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Needlecraft — Health & Wellness Template')
  })
})
