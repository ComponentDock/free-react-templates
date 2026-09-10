import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText(/Fixcraft/)).toBeDefined()
    expect(screen.getByText(/Make your car last longer/)).toBeDefined()
    expect(screen.getByText(/We care about your car/)).toBeDefined()
    expect(screen.getByText('Our car services')).toBeDefined()
    expect(screen.getByText('Free Consultation')).toBeDefined()
    expect(screen.getByText(/Happy Clients & Feedbacks/)).toBeDefined()
    expect(screen.getByText('Latest news from our blog')).toBeDefined()
    expect(screen.getByText('Pricing')).toBeDefined()
    expect(screen.getByText(/Component Dock/)).toBeDefined()
  })
})
