import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Brands } from './Brands'

describe('Brands', () => {
  it('renders the partners section', () => {
    render(<Brands />)

    expect(screen.getByRole('region', { name: /partners/i })).toBeInTheDocument()
  })

  it('renders six brand names', () => {
    render(<Brands />)

    expect(screen.getByText('PharmaCorp')).toBeInTheDocument()
    expect(screen.getByText('MedTech')).toBeInTheDocument()
    expect(screen.getByText('HealthPlus')).toBeInTheDocument()
    expect(screen.getByText('BioGen')).toBeInTheDocument()
    expect(screen.getByText('CareFirst')).toBeInTheDocument()
    expect(screen.getByText('VitaLab')).toBeInTheDocument()
  })
})
