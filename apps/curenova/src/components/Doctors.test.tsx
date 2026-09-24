import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Doctors } from './Doctors'

describe('Doctors', () => {
  it('renders the heading', () => {
    render(<Doctors />)
    expect(screen.getByText('Well Experienced Doctors')).toBeInTheDocument()
  })

  it('renders all three doctors', () => {
    render(<Doctors />)
    expect(screen.getByText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Dr. James Anderson')).toBeInTheDocument()
    expect(screen.getByText('Dr. Emily Chen')).toBeInTheDocument()
  })

  it('shows specialties', () => {
    render(<Doctors />)
    expect(screen.getByText('Cardiology')).toBeInTheDocument()
    expect(screen.getByText('Neurology')).toBeInTheDocument()
    expect(screen.getByText('Pediatrics')).toBeInTheDocument()
  })

  it('shows doctor images', () => {
    render(<Doctors />)
    expect(screen.getByAltText('Dr. Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. James Anderson')).toBeInTheDocument()
    expect(screen.getByAltText('Dr. Emily Chen')).toBeInTheDocument()
  })

  it('has social media links for each doctor', () => {
    render(<Doctors />)
    expect(screen.getByLabelText('Dr. Sarah Mitchell on Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Dr. James Anderson on Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dr. Emily Chen on LinkedIn')).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    render(<Doctors />)
    const section = document.getElementById('doctors')
    expect(section).toBeInTheDocument()
  })
})
