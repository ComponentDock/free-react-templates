import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders section heading', () => {
    render(<PracticeAreas />)
    expect(screen.getByRole('heading', { name: /what we cover/i })).toBeInTheDocument()
  })

  it('renders all six practice area cards', () => {
    render(<PracticeAreas />)
    const areas = [
      'Business Law',
      'Family Law',
      'Criminal Law',
      'Real Estate Law',
      'Personal Injury',
      'Judicial Law',
    ]
    areas.forEach((area) => {
      expect(screen.getByText(area)).toBeInTheDocument()
    })
  })

  it('renders practice area descriptions', () => {
    render(<PracticeAreas />)
    expect(screen.getByText(/Comprehensive legal solutions for businesses/)).toBeInTheDocument()
    expect(screen.getByText(/Compassionate guidance through divorce/)).toBeInTheDocument()
    expect(screen.getByText(/Aggressive defense strategies/)).toBeInTheDocument()
    expect(screen.getByText(/Expert counsel on property transactions/)).toBeInTheDocument()
    expect(screen.getByText(/Dedicated representation to secure/)).toBeInTheDocument()
    expect(screen.getByText(/Skilled courtroom advocacy/)).toBeInTheDocument()
  })
})
