import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText(/Millstone/).length).toBeGreaterThan(0)
  })

  it('renders all major sections', () => {
    render(<App />)
    // TopBar
    expect(screen.getByText(/\+880166 253 232/)).toBeInTheDocument()
    // Hero
    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Industry/i)
    // Services
    expect(screen.getByRole('heading', { name: /Automotive Manufacturing/i })).toBeInTheDocument()
    // About
    expect(screen.getByText(/Safe Industry Solutions/i)).toBeInTheDocument()
    // Mission
    expect(screen.getByText('Our Mission')).toBeInTheDocument()
    // Team
    expect(screen.getByText('Our Team Best Members')).toBeInTheDocument()
    // CTA
    expect(screen.getByText(/Want To Work With Us/i)).toBeInTheDocument()
    // Footer
    expect(screen.getByRole('link', { name: /Component Dock/i })).toBeInTheDocument()
  })
})
