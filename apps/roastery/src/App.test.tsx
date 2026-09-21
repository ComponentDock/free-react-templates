import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Roastery').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getAllByText('Our Story').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Years of Roasting')).toBeInTheDocument()
    expect(screen.getByText('Explore Our Blends')).toBeInTheDocument()
    expect(screen.getByText('What Our Customers Say')).toBeInTheDocument()
    expect(screen.getByText('Coffee Stories')).toBeInTheDocument()
  })
})
