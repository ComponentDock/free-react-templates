import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { ChoosePlan } from './ChoosePlan'

describe('ChoosePlan', () => {
  it('pairs an illustration with the discount headline', () => {
    render(<ChoosePlan />)
    expect(
      screen.getByText('Up to 70% discount with free domain name registration included!'),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: 'Dashboard preview of a hosting control panel' }),
    ).toHaveAttribute('src', 'https://picsum.photos/seed/harbor-plan/1140/1002')
  })

  it('lists the six included perks and a single call to action', () => {
    render(<ChoosePlan />)
    for (const perk of [
      'Free domain name',
      'Free email address',
      'Plenty of disk space',
      'Free website builder',
      'Free marketing tools',
      '1-click WordPress install',
    ]) {
      expect(screen.getByText(perk)).toBeInTheDocument()
    }
    const cta = screen.getByRole('link', { name: 'Get started now' })
    expect(cta).toHaveAttribute('href', '#pricing')
  })
})
