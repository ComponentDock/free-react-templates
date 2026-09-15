import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Pranayama — Yoga Studio Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /Find Your Zen/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Classes/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Different Yoga/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Take a Free Class Now/i })).toBeInTheDocument()
  })

  it('renders testimonial names', () => {
    render(<App />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('renders the quote in the about section', () => {
    render(<App />)
    expect(screen.getByText(/Yoga is the journey of the self/)).toBeInTheDocument()
  })
})
