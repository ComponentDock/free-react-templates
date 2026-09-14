import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders the section title', () => {
    render(<Reviews />)
    expect(screen.getByRole('heading', { name: /client's reviews/i })).toBeInTheDocument()
  })

  it('renders all three reviewer names', () => {
    render(<Reviews />)
    expect(screen.getByText('Cody Hines')).toBeInTheDocument()
    expect(screen.getByText('Chad Herrera')).toBeInTheDocument()
    expect(screen.getByText('Andre Gonzalez')).toBeInTheDocument()
  })

  it('renders review texts', () => {
    render(<Reviews />)
    expect(screen.getByText(/excellent service/i)).toBeInTheDocument()
    expect(screen.getByText(/very reliable and professional/i)).toBeInTheDocument()
    expect(screen.getByText(/great experience from start to finish/i)).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Reviews />)
    // Each review has 5 stars, 3 reviews = 15 stars total
    const stars = document.querySelectorAll('svg')
    expect(stars.length).toBeGreaterThanOrEqual(15)
  })
})
