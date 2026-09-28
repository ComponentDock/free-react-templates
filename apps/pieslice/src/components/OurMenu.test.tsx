import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { OurMenu } from './OurMenu'

describe('OurMenu', () => {
  it('renders the section heading and all 8 menu items initially', () => {
    render(<OurMenu />)

    expect(screen.getByRole('heading', { name: 'Our Menu' })).toBeInTheDocument()

    // All 8 items visible
    const items = screen.getAllByRole('img', {
      name: /pizza|pasta|bruschetta|caesar|chocolate|penne|tiramisu/i,
    })
    expect(items.length).toBe(8)
  })

  it('renders category tabs', () => {
    render(<OurMenu />)

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pizza' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Pasta' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Salads' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Desserts' })).toBeInTheDocument()
  })

  it('filters items when a category tab is clicked', async () => {
    const user = userEvent.setup()
    render(<OurMenu />)

    // Click Pizza tab
    await user.click(screen.getByRole('button', { name: 'Pizza' }))

    // Should show only pizza items (3: Margherita, Prosciutto)
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument()
    expect(screen.getByText('Pizza Prosciutto')).toBeInTheDocument()
    // Pasta items should not be visible
    expect(screen.queryByText('Italian Pasta')).not.toBeInTheDocument()

    // Click "All" to reset
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Italian Pasta')).toBeInTheDocument()
  })

  it('marks the active tab as pressed', async () => {
    const user = userEvent.setup()
    render(<OurMenu />)

    const allTab = screen.getByRole('button', { name: 'All' })
    expect(allTab).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: 'Pasta' }))
    expect(screen.getByRole('button', { name: 'Pasta' })).toHaveAttribute('aria-pressed', 'true')
    expect(allTab).toHaveAttribute('aria-pressed', 'false')
  })
})
