import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('sets the document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Impulse — Creative Agency Template')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/We are Impulse/i)).toBeInTheDocument()
    expect(screen.getByText('Selected Work')).toBeInTheDocument()
    expect(screen.getByText('Happy Client')).toBeInTheDocument()
    expect(screen.getByText('Creative We Grow')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the navbar', () => {
    render(<App />)
    expect(screen.getByText('Impulse')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('Email Design')).toBeInTheDocument()
  })
})
