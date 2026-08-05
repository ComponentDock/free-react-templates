import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices, features, and purchase buttons', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Suitable Pricing Plans' }),
    ).toBeInTheDocument()

    const plans = [
      ['Standard', 'For the individuals', '£199'],
      ['Business', 'For small Company', '£399'],
      ['Ultimate', 'For large Company', '£499'],
    ] as const

    for (const [name, audience, price] of plans) {
      const card = screen.getByText(price).closest('article') as HTMLElement
      expect(within(card).getByRole('heading', { level: 3, name })).toBeInTheDocument()
      expect(within(card).getByText(audience)).toBeInTheDocument()
      for (const feature of [
        '2.5 GB Free Photos',
        'Secure Online Transfer Indeed',
        'Unlimited Styles for interface',
        'Reliable Customer Service',
        'Manual Backup Provided',
      ]) {
        expect(within(card).getByText(feature)).toBeInTheDocument()
      }
    }

    expect(screen.getAllByRole('link', { name: 'Purchase Plan' })).toHaveLength(3)
  })
})
