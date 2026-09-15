import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all 3 feature cards with titles and descriptions', () => {
    render(<Features />)
    expect(screen.getByText('Our Features')).toBeInTheDocument()
    expect(screen.getByText('Best Quality')).toBeInTheDocument()
    expect(screen.getByText(/finest ingredients/i)).toBeInTheDocument()
    expect(screen.getByText('Seasonal Ingredients')).toBeInTheDocument()
    expect(screen.getByText(/locally and seasonally/i)).toBeInTheDocument()
    expect(screen.getByText('Online Reservation')).toBeInTheDocument()
    expect(screen.getByText(/Book your table/i)).toBeInTheDocument()
  })
})
