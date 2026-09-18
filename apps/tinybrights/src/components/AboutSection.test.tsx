import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutSection } from './AboutSection'

describe('AboutSection', () => {
  it('renders the welcome heading', () => {
    render(<AboutSection />)
    expect(screen.getByRole('heading', { name: /Welcome to TinyBrights/i })).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<AboutSection />)
    expect(screen.getByRole('link', { name: /explore courses/i })).toBeInTheDocument()
  })

  it('renders all four features', () => {
    render(<AboutSection />)
    expect(screen.getByText(/Qualified & caring teachers/i)).toBeInTheDocument()
    expect(screen.getByText(/Safe, nurturing environment/i)).toBeInTheDocument()
    expect(screen.getByText(/Creative curriculum & activities/i)).toBeInTheDocument()
    expect(screen.getByText(/Nutritious meals included/i)).toBeInTheDocument()
  })
})
