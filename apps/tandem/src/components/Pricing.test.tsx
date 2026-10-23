import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three plans with prices, features, and purchase buttons', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Awesome Pricing Plan' }),
    ).toBeInTheDocument()

    const plans = [
      ['Free', '$0'],
      ['Medium', '$49'],
      ['Business', '$99'],
    ] as const

    for (const [name, price] of plans) {
      const card = screen.getByText(price).closest('article') as HTMLElement
      expect(within(card).getByRole('heading', { level: 3, name })).toBeInTheDocument()
      for (const feature of ['Easy Installations', 'Unlimited support']) {
        expect(within(card).getByText(feature)).toBeInTheDocument()
      }
    }

    expect(screen.getAllByRole('link', { name: 'Purchase' })).toHaveLength(3)
  })
})
