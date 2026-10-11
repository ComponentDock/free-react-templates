import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PaginationShowcase } from './PaginationShowcase'

describe('PaginationShowcase', () => {
  it('renders the three colour-variant pagination rows', () => {
    render(<PaginationShowcase />)

    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Pagination')

    const rows = [
      screen.getByRole('list', { name: 'primary pagination' }),
      screen.getByRole('list', { name: 'secondary pagination' }),
      screen.getByRole('list', { name: 'info pagination' }),
    ]
    expect(rows).toHaveLength(3)

    const first = within(rows[0]!)
    expect(first.getByRole('button', { name: '1' })).toHaveAttribute('aria-current', 'page')
    expect(first.getByRole('button', { name: '1' }).className).toContain('bg-kit-primary')
    expect(first.getByRole('button', { name: '2' }).className).toContain('hover:bg-band')
  })

  it('moves the active page on click, Prev, and Next', async () => {
    const user = userEvent.setup()
    render(<PaginationShowcase />)

    const primary = within(screen.getByRole('list', { name: 'primary pagination' }))

    await user.click(primary.getByRole('button', { name: '2' }))
    expect(primary.getByRole('button', { name: '2' })).toHaveAttribute('aria-current', 'page')
    expect(primary.getByRole('button', { name: '2' }).className).toContain('bg-kit-primary')

    await user.click(primary.getByRole('button', { name: 'Next page (primary)' }))
    expect(primary.getByRole('button', { name: '3' })).toHaveAttribute('aria-current', 'page')

    await user.click(primary.getByRole('button', { name: 'Previous page (primary)' }))
    expect(primary.getByRole('button', { name: '1' })).toHaveAttribute('aria-current', 'page')

    const info = within(screen.getByRole('list', { name: 'info pagination' }))
    await user.click(info.getByRole('button', { name: '2' }))
    expect(info.getByRole('button', { name: '2' }).className).toContain('bg-kit-info')
    expect(primary.getByRole('button', { name: '1' })).toHaveAttribute('aria-current', 'page')
  })
})
