import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: /Homeward/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { name: /Luxury Living Redefined/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Featured Properties/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Today's Hot Deal/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Clients Testimonials/i })).toBeInTheDocument()
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Homeward — Real Estate Landing Page')
  })
})
