import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Plans } from './Plans'
import { plans } from '../data'

describe('Plans', () => {
  it('renders the three monthly plans with their prices and features', () => {
    render(<Plans />)

    for (const plan of plans) {
      expect(screen.getByRole('heading', { name: plan.name })).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
      expect(screen.getByText(plan.blurb)).toBeInTheDocument()
      for (const feature of plan.features) {
        expect(screen.getByText(feature)).toBeInTheDocument()
      }
    }

    expect(screen.getAllByText('per month')).toHaveLength(3)
  })

  it('marks only the middle plan as most chosen', () => {
    render(<Plans />)

    expect(screen.getAllByText('Most chosen')).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Choose Seasonal' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Choose Priority' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Choose Whole home' })).toHaveLength(1)
  })

  it('keeps the billing footnote under the cards', () => {
    render(<Plans />)

    expect(
      screen.getByText('Plans are billed monthly. Cancel any time with 30 days notice.'),
    ).toBeInTheDocument()
  })
})
