import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading', () => {
    render(<Features />)
    expect(screen.getByText('What makes us best?')).toBeInTheDocument()
  })

  it('renders all four features', () => {
    render(<Features />)
    expect(screen.getByText('Qualified Doctors')).toBeInTheDocument()
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
    expect(screen.getByText('Online Enrollment')).toBeInTheDocument()
    expect(screen.getByText('Modern Facilities')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Board-certified physicians/)).toBeInTheDocument()
    expect(screen.getByText(/Complimentary initial consultation/)).toBeInTheDocument()
    expect(screen.getByText(/Quick and easy online patient registration/)).toBeInTheDocument()
    expect(screen.getByText(/Cutting-edge medical equipment/)).toBeInTheDocument()
  })

  it('has a background image div', () => {
    render(<Features />)
    const bgDiv = screen.getByRole('img', { name: /modern medical facility/i })
    expect(bgDiv).toBeInTheDocument()
  })
})
