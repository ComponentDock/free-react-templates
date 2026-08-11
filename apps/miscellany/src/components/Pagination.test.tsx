import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from './Pagination'
import { paginationNextLabel, paginationPages, paginationPrevLabel } from '../data'

describe('Pagination', () => {
  it('shows page numbers 1–4 with prev/next arrows', () => {
    render(<Pagination />)
    for (const page of paginationPages) {
      expect(screen.getByRole('link', { name: String(page) })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: paginationPrevLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: paginationNextLabel })).toBeInTheDocument()
  })

  it('highlights the current page', () => {
    render(<Pagination />)
    const current = screen.getByRole('link', { name: String(paginationPages[0]) })
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current.className).toContain('bg-brand')
  })
})
