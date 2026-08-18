import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'
import { plans } from '../data'

describe('Pricing', () => {
  it('renders the heading, three plans with prices and per-project labels', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: /Flexible Packages/ })).toBeInTheDocument()

    expect(screen.getAllByText('$')).toHaveLength(3)
    expect(screen.getByText('499')).toBeInTheDocument()
    expect(screen.getByText('999')).toBeInTheDocument()
    expect(screen.getByText('2,499')).toBeInTheDocument()
    expect(screen.getAllByText('per project')).toHaveLength(3)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('lists every feature for each plan with included/excluded marks', () => {
    render(<Pricing />)

    for (const plan of plans) {
      const card = screen.getByText(plan.name).closest('article') as HTMLElement
      for (const feature of plan.features) {
        expect(within(card).getByText(feature.label)).toBeInTheDocument()
      }
    }
  })

  it('links every Get Started button to the contact section', () => {
    render(<Pricing />)

    const buttons = screen.getAllByRole('link', { name: 'Get Started' })
    expect(buttons).toHaveLength(3)
    for (const button of buttons) {
      expect(button).toHaveAttribute('href', '#contactme')
    }
  })
})
