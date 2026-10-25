import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pricing } from './Pricing'

function tier(name: string): HTMLElement {
  return screen.getByRole('heading', { level: 3, name }).closest('li') as HTMLElement
}

describe('Pricing', () => {
  it('renders three tiers with monthly prices and notes', () => {
    render(<Pricing />)

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$5')).toBeInTheDocument()
    expect(screen.getByText('$12')).toBeInTheDocument()
    expect(screen.getAllByText('Billed monthly')).toHaveLength(3)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('rewrites every price and note when the switch is turned to yearly', () => {
    render(<Pricing />)

    const toggle = screen.getByRole('switch', { name: 'Toggle annual billing' })
    expect(toggle).toHaveAttribute('aria-checked', 'false')

    fireEvent.click(toggle)

    expect(toggle).toHaveAttribute('aria-checked', 'true')
    expect(screen.getByText('$50')).toBeInTheDocument()
    expect(screen.getByText('$120')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($0/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($50/year)')).toBeInTheDocument()
    expect(screen.getByText('Billed annually ($120/year)')).toBeInTheDocument()
    expect(screen.queryByText('Billed monthly')).toBeNull()

    fireEvent.click(toggle)
    expect(toggle).toHaveAttribute('aria-checked', 'false')
    expect(screen.getAllByText('Billed monthly')).toHaveLength(3)
  })

  it('lists the Free tier features in order, with two greyed exclusions', () => {
    render(<Pricing />)
    const free = tier('Free')

    const features = within(free).getAllByRole('listitem')
    expect(features.map((item) => item.textContent)).toEqual([
      'Up to 3 circles',
      'Unlimited posts and photos',
      'Full privacy controls',
      'Unlimited circles',
      'Original-quality photo storage',
    ])
    expect(within(free).getByText('Unlimited circles')).toHaveClass('text-gray-500')
    expect(within(free).getByText('Up to 3 circles')).toHaveClass('text-gray-700')
    expect(within(free).getByRole('link', { name: 'Start free' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('rings the featured tier and gives it the solid call to action', () => {
    render(<Pricing />)

    const member = tier('Member')
    const free = tier('Free')

    expect(member).toHaveClass('ring-2', 'ring-primary-600')
    expect(free).not.toHaveClass('ring-2')
    expect(within(member).getByRole('link', { name: 'Become a member' })).toHaveClass(
      'bg-primary-600',
    )
    expect(within(free).getByRole('link', { name: 'Start free' })).toHaveClass('border-gray-300')
    expect(within(tier('Family')).getByRole('link', { name: 'Set up a family plan' })).toHaveClass(
      'bg-primary-600',
    )
  })
})
