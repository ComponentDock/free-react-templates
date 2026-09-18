import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders the main page title', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Food Catering')
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { name: /our services/i }).length).toBeGreaterThanOrEqual(
      1,
    )
    expect(screen.getByRole('heading', { name: /popular orders/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /feedback from customers/i })).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
