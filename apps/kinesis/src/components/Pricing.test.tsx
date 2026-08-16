import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { plans } from '../data'

describe('Pricing', () => {
  it('renders the eyebrow, heading and three plan cards', () => {
    render(<Pricing />)
    expect(screen.getByText('Our Pricing')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: /Pricing & Packages/ }),
    ).toBeInTheDocument()
    for (const plan of plans) {
      expect(screen.getByText(plan.name)).toBeInTheDocument()
      expect(
        screen.getByText(
          (_content, element) =>
            element?.tagName === 'P' && element.textContent === `$${plan.price}`,
        ),
      ).toBeInTheDocument()
    }
  })

  it('lists five check features per plan and a Get Started button on each', () => {
    render(<Pricing />)
    expect(screen.getAllByText('Personal Trainer')).toHaveLength(3)
    expect(screen.getAllByText('Convenient Time')).toHaveLength(3)
    expect(screen.getAllByText('Special Class')).toHaveLength(3)
    expect(screen.getAllByText('Group Training')).toHaveLength(3)
    expect(screen.getAllByText('Free Fitness Training')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })
})
