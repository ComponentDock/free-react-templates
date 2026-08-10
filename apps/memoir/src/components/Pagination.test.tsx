import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders prev, five page circles and next with page 1 active', () => {
    render(<Pagination />)
    expect(screen.getByRole('button', { name: /previous/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next/i })).toBeInTheDocument()
    for (let page = 1; page <= 5; page += 1) {
      expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument()
    }
    const active = screen.getByRole('button', { name: 'Page 1' })
    expect(active.className).toContain('bg-sky-500')
  })

  it('marks the clicked page as active', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByRole('button', { name: 'Page 3' }))
    expect(screen.getByRole('button', { name: 'Page 3' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'false')
  })

  it('moves with the previous and next controls, clamped at the bounds', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByRole('button', { name: /previous/i }))
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'true')

    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: 'Page 3' })).toHaveAttribute('aria-current', 'true')

    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: 'Page 5' })).toHaveAttribute('aria-current', 'true')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: 'Page 5' })).toHaveAttribute('aria-current', 'true')
  })
})
