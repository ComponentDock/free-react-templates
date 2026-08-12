import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Counters } from './Counters'

describe('Counters', () => {
  it('renders the Quick Fact heading and three statistics', () => {
    render(<Counters />)

    const section = screen.getByRole('region', { name: 'Counters' })
    expect(within(section).getAllByText('Quick Fact').length).toBeGreaterThanOrEqual(1)

    const stats = [
      ['220', 'Amazing Products'],
      ['7930', 'Happy Clients'],
      ['67', 'Support Daily Support'],
    ] as const
    for (const [value, label] of stats) {
      const number = within(section).getByText(value)
      expect(number).toHaveClass('text-counter', 'text-[50px]', 'font-semibold')
      expect(within(section).getByText(label)).toHaveClass('text-ink')
    }
  })
})
