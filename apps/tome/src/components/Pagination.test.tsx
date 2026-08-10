import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'
import { activePage, nextPageLabel, pageCount, pageLabel, prevPageLabel } from '../data'

describe('Pagination', () => {
  it('renders the circular page controls with the first page active', () => {
    render(<Pagination />)

    expect(screen.getByRole('button', { name: prevPageLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: nextPageLabel })).toBeInTheDocument()

    for (let page = 1; page <= pageCount; page += 1) {
      const control = screen.getByRole('button', { name: pageLabel(page) })
      expect(control).toHaveTextContent(String(page))
      if (page === activePage) {
        expect(control).toHaveAttribute('aria-current', 'page')
      } else {
        expect(control).not.toHaveAttribute('aria-current')
      }
    }
  })

  it('marks exactly one page as current', () => {
    render(<Pagination />)

    const current = screen.getAllByRole('button', { current: 'page' })
    expect(current).toHaveLength(1)
    expect(current[0]).toHaveTextContent(String(activePage))
  })
})
