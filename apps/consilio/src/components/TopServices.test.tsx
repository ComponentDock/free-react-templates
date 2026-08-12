import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopServices } from './TopServices'

describe('TopServices', () => {
  it('shows the section eyebrow and heading', () => {
    render(<TopServices />)

    expect(screen.getByText('Our Top Services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Services' })).toBeInTheDocument()
  })

  it('renders the three service cards with icon, title, and blurb', () => {
    render(<TopServices />)

    expect(screen.getByRole('heading', { level: 3, name: 'Strategy Planning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Insurance Service' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: 'Audit & Evaluation' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/sharp, executable growth strategies/)).toBeInTheDocument()
    expect(screen.getByText(/risk assessments and coverage programs/)).toBeInTheDocument()
    expect(screen.getByText(/Independent audits and performance evaluations/)).toBeInTheDocument()
  })
})
