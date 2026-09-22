import { render, screen } from '@testing-library/react'
import { BlogCards } from './BlogCards'
import { describe, expect, it } from 'vitest'

describe('BlogCards', () => {
  it('renders all three blog cards', () => {
    render(<BlogCards />)
    expect(screen.getByText('Beautiful Accommodation')).toBeInTheDocument()
    expect(screen.getByText('Delicious Dining')).toBeInTheDocument()
    expect(screen.getByText('Spa & Wellness')).toBeInTheDocument()
  })

  it('renders card descriptions', () => {
    render(<BlogCards />)
    const descriptions = screen.getAllByText(/Leather detail shoulder/)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })

  it('renders card images', () => {
    render(<BlogCards />)
    expect(screen.getByAltText('Beautiful Accommodation')).toBeInTheDocument()
    expect(screen.getByAltText('Delicious Dining')).toBeInTheDocument()
    expect(screen.getByAltText('Spa & Wellness')).toBeInTheDocument()
  })
})
