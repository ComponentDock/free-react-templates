import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Insurance } from './Insurance'

describe('Insurance', () => {
  it('renders the heading and explanatory billing line', () => {
    render(<Insurance />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'We Work With Your Insurance' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(/We accept most major insurance plans and offer transparent billing/),
    ).toBeInTheDocument()
  })

  it('lists the accepted insurance plans', () => {
    render(<Insurance />)
    for (const plan of [
      'Aetna',
      'Blue Cross Blue Shield',
      'Cigna',
      'UnitedHealthcare',
      'Medicare',
      'Medicaid',
    ]) {
      expect(screen.getByText(plan)).toBeInTheDocument()
    }
  })

  it('shows accepted payment methods', () => {
    render(<Insurance />)
    expect(screen.getByText('Credit & Debit Cards')).toBeInTheDocument()
    expect(screen.getByText('HSA / FSA Accepted')).toBeInTheDocument()
  })
})
