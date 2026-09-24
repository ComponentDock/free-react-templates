import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Doctors } from './Doctors'

describe('Doctors', () => {
  it('renders the heading', () => {
    render(<Doctors />)
    expect(screen.getByRole('heading', { name: /our qualified doctors/i })).toBeInTheDocument()
  })

  it('renders all doctor names', () => {
    render(<Doctors />)
    expect(screen.getByText('Dr. Alicia Henderson')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Wilson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders specialties', () => {
    render(<Doctors />)
    expect(screen.getByText('Cardiologist')).toBeInTheDocument()
    expect(screen.getByText('Neurologist')).toBeInTheDocument()
    expect(screen.getByText('Ophthalmologist')).toBeInTheDocument()
  })
})
