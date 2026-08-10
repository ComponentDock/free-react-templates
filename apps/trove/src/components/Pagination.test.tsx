import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'
import { paginationPages } from '../data'

describe('Pagination', () => {
  it('shows Previous / Next links and all page numbers', () => {
    render(<Pagination />)
    expect(screen.getByRole('navigation', { name: 'Blog pagination' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Previous/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Next/ })).toBeInTheDocument()
    for (const page of paginationPages) {
      expect(screen.getByRole('link', { name: page })).toBeInTheDocument()
    }
  })

  it('marks the first page as current', () => {
    render(<Pagination />)
    expect(screen.getByRole('link', { name: '01' })).toHaveAttribute('aria-current', 'page')
  })
})
