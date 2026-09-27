import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the full template', () => {
    render(<App />)
    expect(screen.getByText(/we're real estate king/i)).toBeInTheDocument()
    expect(screen.getByText('Featured Properties')).toBeInTheDocument()
    expect(screen.getByText('Find Your Dream Property Today')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Propwise — Real Estate Agency Template')
  })

  it('renders the utility bar', () => {
    render(<App />)
    expect(screen.getByText('+12312-3-1209')).toBeInTheDocument()
  })

  it('renders the navbar', () => {
    render(<App />)
    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /component dock/i })).toBeInTheDocument()
  })
})
