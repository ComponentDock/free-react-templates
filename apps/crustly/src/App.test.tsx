import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('Crustly')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Crustly')
    expect(screen.getByText('About Our Story')).toBeInTheDocument()
    expect(screen.getAllByText('Honey Chocolate Pie').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 2, name: /our menu/i })).toBeInTheDocument()
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
    expect(screen.getAllByText('Book a Table').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Crustly — Restaurant & Bakery Template')
  })
})
