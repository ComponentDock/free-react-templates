import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'
import { plans } from '../data'

describe('Pricing', () => {
  it('renders the heading, subheading, and four plan cards', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2, name: 'Our Best Pricing' })).toBeInTheDocument()
    expect(screen.getByText('Pricing Plans')).toBeInTheDocument()
    for (const plan of plans) {
      const heading = screen.getByRole('heading', { level: 3, name: plan.name })
      expect(heading).toBeInTheDocument()
      const card = heading.closest('article') as HTMLElement
      expect(within(card).getByText(plan.price)).toBeInTheDocument()
      expect(within(card).getByText(plan.note)).toBeInTheDocument()
      for (const feature of plan.features) {
        expect(within(card).getByText(feature.label)).toBeInTheDocument()
      }
    }
  })

  it('renders a Get Started button and Enjoy All The Features link per card', () => {
    render(<Pricing />)
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Enjoy All The Features' })).toHaveLength(4)
  })
})
