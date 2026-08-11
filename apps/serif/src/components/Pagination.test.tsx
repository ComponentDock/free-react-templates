import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from './Pagination'
import { nextPageLabel, pageLabel, paginationLabel, previousPageLabel } from '../data'

describe('Pagination', () => {
  it('renders Previous, page 1, page 2 and Next links', () => {
    render(<Pagination />)

    const nav = screen.getByRole('navigation', { name: paginationLabel })
    expect(nav).toBeInTheDocument()
    expect(screen.getByRole('link', { name: previousPageLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: pageLabel(1) })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: pageLabel(2) })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: nextPageLabel })).toBeInTheDocument()
  })

  it('marks the current page with aria-current', () => {
    render(<Pagination />)
    expect(screen.getByRole('link', { name: pageLabel(1) })).toHaveAttribute('aria-current', 'page')
  })
})
