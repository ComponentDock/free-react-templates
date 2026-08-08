import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Insurance } from './Insurance'

describe('Insurance', () => {
  it('renders the heading, six in-network plans, and the fallback note', () => {
    render(<Insurance />)

    expect(screen.getByText('Insurance')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'We Accept Most Insurance Plans' }),
    ).toBeInTheDocument()

    const plans = [
      'Aetna',
      'Cigna',
      'Delta Dental',
      'MetLife',
      'United Healthcare',
      'Blue Cross Blue Shield',
    ]
    for (const plan of plans) {
      expect(screen.getByText(plan)).toBeInTheDocument()
    }

    expect(screen.getAllByText('In-network provider')).toHaveLength(6)
    expect(screen.getByText(/Don't see your insurance plan/)).toBeInTheDocument()
  })
})
