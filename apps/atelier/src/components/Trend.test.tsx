import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Trend } from './Trend'

describe('Trend', () => {
  it('shows three product cards for the active tab and switches tabs', async () => {
    const user = userEvent.setup()
    render(<Trend />)

    expect(screen.getByRole('button', { name: 'Hot Trend' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('heading', { name: 'Chain bucket bag' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)

    await user.click(screen.getByRole('button', { name: 'Best Seller' }))
    expect(screen.getByRole('button', { name: 'Best Seller' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(
      screen.getByRole('heading', { name: 'Zip-pockets pebbled tote briefcase' }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: 'Chain bucket bag' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Feature' }))
    expect(screen.getByRole('button', { name: 'Feature' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('heading', { name: 'Bow wrap skirt' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(3)
  })
})
