import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /tavern/i })).toBeInTheDocument()
  })

  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Expert Chefs')).toBeInTheDocument()
    expect(screen.getByText('Drinks')).toBeInTheDocument()
    expect(screen.getByText('Special Dishes')).toBeInTheDocument()
    expect(screen.getByText('Our Menu')).toBeInTheDocument()
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
  })
})
