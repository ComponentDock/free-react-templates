import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { About } from './About'

describe('About', () => {
  it('renders the clinic story with heading and paragraphs', () => {
    render(<About />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Cura' })).toBeInTheDocument()
    expect(screen.getByText(/For over 25 years, Cura has delivered/)).toBeInTheDocument()
  })

  it('renders the stats row with all four metrics', () => {
    render(<About />)
    expect(screen.getByText('25+')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('50+')).toBeInTheDocument()
    expect(screen.getByText('Doctors Board Certified')).toBeInTheDocument()
    expect(screen.getByText('100,000+')).toBeInTheDocument()
    expect(screen.getByText('Patients Treated')).toBeInTheDocument()
    expect(screen.getByText('4.9/5')).toBeInTheDocument()
    expect(screen.getByText('Patient Rating')).toBeInTheDocument()
  })
})
