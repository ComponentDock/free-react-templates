import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Programs } from './Programs'

describe('Programs', () => {
  it('shows the section heading on the alternating band', () => {
    render(<Programs />)

    expect(screen.getByRole('heading', { level: 2, name: 'How We Help' })).toBeInTheDocument()
    expect(screen.getByText(/Four focus areas/)).toBeInTheDocument()
  })

  it('shows the four program cards', () => {
    render(<Programs />)

    for (const title of [
      'Education for All',
      'Health & Wellness',
      'Economic Empowerment',
      'Environmental Action',
    ]) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
    expect(screen.getByText(/School supplies, teacher training/)).toBeInTheDocument()
    expect(screen.getByText(/Mobile clinics, vaccinations/)).toBeInTheDocument()
    expect(screen.getByText(/Micro-loans, job skills training/)).toBeInTheDocument()
    expect(screen.getByText(/Tree planting, clean energy/)).toBeInTheDocument()
  })
})
