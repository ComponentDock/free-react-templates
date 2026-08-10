import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders square « 1 2 3 4 » items with page 1 active', () => {
    render(<Pagination />)
    for (const label of ['Previous page', 'Page 1', 'Page 2', 'Page 3', 'Page 4', 'Next page']) {
      expect(screen.getByRole('button', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'false')
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
    expect(screen.getByRole('button', { name: 'Next page' })).not.toBeDisabled()
  })

  it('moves the active page when a page or arrow is clicked', () => {
    render(<Pagination />)
    fireEvent.click(screen.getByRole('button', { name: 'Page 3' }))
    expect(screen.getByRole('button', { name: 'Page 3' })).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Previous page' }))
    expect(screen.getByRole('button', { name: 'Page 2' })).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Next page' }))
    expect(screen.getByRole('button', { name: 'Page 3' })).toHaveAttribute('aria-current', 'true')
  })

  it('disables the arrows at the first and last page', () => {
    render(<Pagination />)
    fireEvent.click(screen.getByRole('button', { name: 'Page 4' }))
    expect(screen.getByRole('button', { name: 'Page 4' })).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('button', { name: 'Next page' })).toBeDisabled()

    fireEvent.click(screen.getByRole('button', { name: 'Page 1' }))
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeDisabled()
  })
})
