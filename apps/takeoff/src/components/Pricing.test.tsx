import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices, features, and purchase buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing Plan' })).toBeInTheDocument()

    const plans = [
      ['Basic', '$50/m'],
      ['Premium', '$150/m'],
      ['Unlimited', '$250/m'],
    ] as const

    for (const [name, price] of plans) {
      const card = screen.getByText(price).closest('article') as HTMLElement
      expect(within(card).getByRole('heading', { level: 3, name })).toBeInTheDocument()
      for (const feature of [
        '10 User',
        '50 Email Accounts',
        '100 MB Disk Space',
        '2 Subdomains',
        'Free Updates',
        'Support 24/7',
      ]) {
        expect(within(card).getByText(feature)).toBeInTheDocument()
      }
    }

    expect(screen.getAllByRole('link', { name: 'Purchase' })).toHaveLength(3)
  })
})
