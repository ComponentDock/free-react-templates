import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Specialists } from './Specialists'

describe('Specialists', () => {
  it('renders the heading and four specialist cards', () => {
    render(<Specialists />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Expert Team' })).toBeInTheDocument()
    for (const name of ['Isabella Laurent', 'Marcus Chen', 'Sofia Ramirez', 'Amara Johnson']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(screen.getByAltText(`Portrait of ${name}`)).toBeInTheDocument()
    }
  })

  it('shows roles, specialties and experience on each card', () => {
    render(<Specialists />)
    expect(screen.getByText('Senior Aesthetician')).toBeInTheDocument()
    expect(screen.getByText('Lead Massage Therapist')).toBeInTheDocument()
    expect(screen.getByText('Hair Stylist & Colorist')).toBeInTheDocument()
    expect(screen.getByText('Wellness Director')).toBeInTheDocument()
    expect(screen.getByText('12 Years Experience')).toBeInTheDocument()
    expect(screen.getByText('15 Years Experience')).toBeInTheDocument()
  })
})
