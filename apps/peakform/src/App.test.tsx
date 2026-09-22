import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders the Peakform app', () => {
    render(<App />)
    expect(screen.getByText('peak')).toBeInTheDocument()
    expect(screen.getByText('form')).toBeInTheDocument()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Peakform — Gym & Fitness')
  })

  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByText(/get your body/i)).toBeInTheDocument()
    expect(screen.getAllByText('Yoga').length).toBeGreaterThan(0)
    expect(screen.getByText(/about us/i)).toBeInTheDocument()
    expect(screen.getByText(/our classes/i)).toBeInTheDocument()
    expect(screen.getByText(/class schedule/i)).toBeInTheDocument()
    expect(screen.getByText(/testimonials/i)).toBeInTheDocument()
    expect(screen.getByText(/our trainers/i)).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
