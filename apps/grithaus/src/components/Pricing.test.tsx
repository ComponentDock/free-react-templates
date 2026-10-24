import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { plans } from '../data'

describe('Pricing', () => {
  it('renders three plan cards on a fixed-attachment band', () => {
    render(<Pricing />)
    const band = screen.getByRole('region', { name: 'Membership plans' })
    expect(band).toHaveClass('bg-fixed')
    expect(screen.getAllByRole('article')).toHaveLength(3)

    for (const plan of plans) {
      expect(screen.getByText(plan.price)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 5, name: plan.title })).toBeInTheDocument()
      expect(screen.getByText(plan.features[0]!)).toBeInTheDocument()
    }

    expect(screen.getAllByText('/ Month')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Enroll Now' })).toHaveLength(3)
  })
})
