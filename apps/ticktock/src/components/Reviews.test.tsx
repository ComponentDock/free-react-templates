import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Reviews } from './Reviews'

describe('Reviews', () => {
  it('renders section heading', () => {
    render(<Reviews />)
    expect(screen.getByText(/some features that made us unique/i)).toBeInTheDocument()
  })

  it('renders review cards with names and star ratings', () => {
    render(<Reviews />)
    expect(screen.getByText('Cody Hines')).toBeInTheDocument()
    expect(screen.getByText('Chad Herrera')).toBeInTheDocument()
    expect(screen.getByText('Andre Gonzalez')).toBeInTheDocument()
    expect(screen.getByText('Jon Banks')).toBeInTheDocument()
    expect(screen.getByText('Landon Houston')).toBeInTheDocument()
    expect(screen.getByText('Nelle Wade')).toBeInTheDocument()
  })

  it('renders star ratings with correct labels', () => {
    render(<Reviews />)
    expect(screen.getAllByLabelText('3 out of 5 stars')).toHaveLength(2)
    expect(screen.getAllByLabelText('2 out of 5 stars')).toHaveLength(2)
    expect(screen.getAllByLabelText('4 out of 5 stars')).toHaveLength(2)
  })
})
