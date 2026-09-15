import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProfessionalServices } from './ProfessionalServices'

describe('ProfessionalServices', () => {
  it('displays heading, description, and CTA', () => {
    render(<ProfessionalServices />)
    expect(screen.getByText(/We will create modern/)).toBeInTheDocument()
    expect(screen.getByText(/Our Professional Services/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discover More About Us/i })).toBeInTheDocument()
  })
})
