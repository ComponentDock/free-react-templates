import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders prev/next arrows and five page numbers', () => {
    render(<Pagination />)
    expect(screen.getByRole('navigation', { name: 'Pagination' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous page' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next page' })).toBeInTheDocument()
    for (const page of [1, 2, 3, 4, 5]) {
      expect(screen.getByRole('button', { name: `Page ${page}` })).toBeInTheDocument()
    }
  })

  it('marks the first page as the current page', () => {
    render(<Pagination />)
    expect(screen.getByRole('button', { name: 'Page 1' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('button', { name: 'Page 2' })).not.toHaveAttribute('aria-current')
  })
})
