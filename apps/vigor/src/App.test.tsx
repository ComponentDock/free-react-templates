import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Vigor').length).toBeGreaterThan(0)
    expect(screen.getByText(/Crossfit is for/)).toBeDefined()
    expect(screen.getByText(/Welcome to/)).toBeDefined()
    expect(screen.getByText('Membership Plans')).toBeDefined()
    expect(screen.getByText('Successful Stories')).toBeDefined()
    expect(screen.getByText('Latest Articles')).toBeDefined()
    expect(screen.getByText('About Us')).toBeDefined()
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Vigor — Crossfit Gym Template')
  })
})
