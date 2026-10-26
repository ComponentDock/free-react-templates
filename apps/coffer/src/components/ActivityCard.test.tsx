import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ActivityCard } from './ActivityCard'
import { TRANSACTIONS } from '../data/accounts'

describe('ActivityCard', () => {
  it('rules four rows under its own heading', () => {
    render(<ActivityCard transactions={TRANSACTIONS} />)

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Recent activity')
    expect(screen.getByRole('heading', { level: 2 })).toHaveAttribute('id', 'coffer-activity')
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })

  it('reads each merchant over its category and day', () => {
    render(<ActivityCard transactions={TRANSACTIONS} />)

    expect(screen.getByText('Corner Market').parentElement).toHaveTextContent(
      'Corner MarketGroceries · Today',
    )
    expect(screen.getByText('Bluebird Café').parentElement).toHaveTextContent(
      'Bluebird CaféEating out · 21 Sep',
    )
  })

  it('signs the amounts with U+2212 out and a mint credit in', () => {
    render(<ActivityCard transactions={TRANSACTIONS} />)

    expect(screen.getByText('−€42.18').className).not.toContain('text-green-200')
    const credit = screen.getByText('+€3,150.00')
    expect(credit.className).toContain('text-green-200')
    expect(screen.getByText('−€8.40')).toBeInTheDocument()
  })

  it('keeps the amounts tabular and never wrapping', () => {
    render(<ActivityCard transactions={TRANSACTIONS} />)

    screen.getAllByText(/^[−+]/).forEach((amount) => {
      expect(amount.className).toContain('tabular-nums')
      expect(amount.className).toContain('whitespace-nowrap')
    })
  })

  it('rules every row but the last and tiles each icon', () => {
    const { container } = render(<ActivityCard transactions={TRANSACTIONS} />)

    const rows = [...container.querySelectorAll('li')]
    rows.slice(0, 3).forEach((row) => expect(row.className).toContain('border-b'))
    expect(rows[3]!.className).toContain('last:border-b-0')
    expect(container.querySelectorAll('li span[aria-hidden="true"]')).toHaveLength(4)
    expect(container.querySelectorAll('svg')).toHaveLength(4)
  })

  it('links See all to the ledger instead of a dead hash', () => {
    render(<ActivityCard transactions={TRANSACTIONS} />)

    const link = screen.getByRole('link', { name: 'See all' })
    expect(link).toHaveAttribute('href', '#coffer-activity')
    expect(link.className).toContain('ledger-link')
  })
})
