import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'
import { plans } from '../data'

describe('Pricing', () => {
  it('renders the heading and four plan cards with name, price, tagline, features and Choose Plan', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Pricing' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(4)
    for (const plan of plans) {
      expect(screen.getByRole('heading', { level: 3, name: plan.name })).toBeInTheDocument()
      expect(screen.getByText(plan.price)).toBeInTheDocument()
      expect(screen.getAllByText(plan.tagline).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText('Enjoy All The Features')).toHaveLength(4)
      for (const feature of plan.features) {
        expect(screen.getAllByText(feature).length).toBeGreaterThanOrEqual(1)
      }
    }
    expect(screen.getAllByRole('link', { name: 'Choose Plan' })).toHaveLength(4)
  })
})
