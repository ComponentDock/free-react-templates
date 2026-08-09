import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Rouge — Beauty Salon Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    expect(screen.getByRole('heading', { level: 1, name: /Be bold/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: 'Our Services' }).length).toBeGreaterThanOrEqual(
      1,
    )
    expect(screen.getByRole('heading', { name: 'Client Testimonials' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Make an appointment' })).toBeInTheDocument()
  })
})
