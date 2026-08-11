import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './Pagination'
import { paginationLabel } from '../data'

describe('Pagination', () => {
  it('renders five numbered pages with the first active', () => {
    render(<Pagination />)
    const nav = screen.getByRole('navigation', { name: paginationLabel })
    expect(nav).toBeInTheDocument()
    for (let page = 1; page <= 5; page += 1) {
      expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page')
  })

  it('moves forward and backward with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByRole('button', { name: 'Next page' }))
    expect(screen.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'page')
    await user.click(screen.getByRole('button', { name: 'Previous page' }))
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page')
  })

  it('jumps to a page by number', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByRole('button', { name: 'Page 4' }))
    expect(screen.getByRole('button', { name: 'Page 4' })).toHaveAttribute('aria-current', 'page')
  })

  it('clamps at the first and last page', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByRole('button', { name: 'Previous page' }))
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page')
    await user.click(screen.getByRole('button', { name: 'Page 5' }))
    await user.click(screen.getByRole('button', { name: 'Next page' }))
    expect(screen.getByRole('button', { name: 'Page 5' })).toHaveAttribute('aria-current', 'page')
  })
})
