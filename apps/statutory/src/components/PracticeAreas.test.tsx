import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PracticeAreas } from './PracticeAreas'

describe('PracticeAreas', () => {
  it('renders heading and all six areas', () => {
    render(<PracticeAreas />)
    expect(screen.getByText('What We Cover')).toBeInTheDocument()
    expect(screen.getByText('Business Law')).toBeInTheDocument()
    expect(screen.getByText('Family Law')).toBeInTheDocument()
    expect(screen.getByText('Criminal Law')).toBeInTheDocument()
    expect(screen.getByText('Real Estate Law')).toBeInTheDocument()
    expect(screen.getByText('Personal Injury')).toBeInTheDocument()
    expect(screen.getByText('Judicial Law')).toBeInTheDocument()
  })
})
