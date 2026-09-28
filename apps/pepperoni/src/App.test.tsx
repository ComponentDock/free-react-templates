import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText(/Pepperoni/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Italian Cuisine/i)).toBeInTheDocument()
    expect(screen.getByText(/Welcome to/)).toBeInTheDocument()
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument()
    expect(screen.getByText(/Hot Pizza Meals/i)).toBeInTheDocument()
    expect(screen.getByText(/Our Menu Pricing/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument()
  })
})
