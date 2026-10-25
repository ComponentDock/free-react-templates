import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'
import { plans } from '../data'

describe('Pricing', () => {
  it('renders the three tiers in order with their prices', () => {
    render(<Pricing />)

    plans.forEach((plan) => {
      const card = screen.getByRole('heading', { level: 3, name: plan.name }).closest('li')!
      expect(within(card).getAllByText(plan.price).length).toBeGreaterThan(0)
    })
  })

  it('puts the ribbon on the middle card only', () => {
    render(<Pricing />)

    expect(screen.getAllByText('Most chosen')).toHaveLength(1)
    const middle = screen.getByRole('heading', { level: 3, name: 'Operated' }).closest('li')!
    expect(within(middle).getByText('Most chosen')).toBeInTheDocument()
    expect(middle).toHaveClass('ring-2', 'ring-primary-600')
  })

  it('marks excluded features without a check', () => {
    render(<Pricing />)

    expect(screen.getAllByText('(not included)')).toHaveLength(2)
    expect(screen.getByText('Named support contact')).toBeInTheDocument()
  })

  it('gives the featured card a solid CTA and the others a muted one', () => {
    render(<Pricing />)

    const middle = screen.getByRole('heading', { level: 3, name: 'Operated' }).closest('li')!
    expect(within(middle).getByRole('link', { name: 'Book a walkthrough' })).toHaveClass(
      'bg-primary-600',
    )
    expect(screen.getByRole('link', { name: 'Read the install guide' })).toHaveClass('bg-gray-200')
    const consortium = screen.getByRole('heading', { level: 3, name: 'Consortium' }).closest('li')!
    expect(within(consortium).getByRole('link', { name: 'Talk to us' })).toHaveClass('bg-gray-200')
  })

  it('keeps every card in one list', () => {
    const { container } = render(<Pricing />)

    const list = container.querySelector('ul')!
    expect(list.querySelectorAll(':scope > li')).toHaveLength(3)
  })
})
