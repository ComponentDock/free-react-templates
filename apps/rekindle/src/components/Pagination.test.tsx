import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from './Pagination'
import { nextLabel, pageNumbers, paginationLabel, prevLabel } from '../data'

describe('Pagination', () => {
  it('renders the pagination landmark', () => {
    render(<Pagination />)
    expect(screen.getByRole('navigation', { name: paginationLabel })).toBeInTheDocument()
  })

  it('shows Previous, the page numbers, and Next', () => {
    render(<Pagination />)
    const pager = screen.getByRole('navigation', { name: paginationLabel })
    expect(within(pager).getByRole('link', { name: prevLabel })).toBeInTheDocument()
    for (const page of pageNumbers) {
      const link = within(pager).getByRole('link', { name: `Page ${page}` })
      expect(link).toHaveTextContent(page)
    }
    expect(within(pager).getByRole('link', { name: nextLabel })).toBeInTheDocument()
  })

  it('styles the links with square corners', () => {
    render(<Pagination />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
    for (const link of links) {
      expect(link).toHaveClass('rounded-none')
    }
  })
})
