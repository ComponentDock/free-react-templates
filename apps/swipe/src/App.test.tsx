import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Swipe — Testimonials Carousel')
  })
})
