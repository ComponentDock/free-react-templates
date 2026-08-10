import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { activePage, paginationPages } from '../data'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders the page numbers 01 through 04 and 09', () => {
    render(<Pagination />)

    const nav = screen.getByRole('navigation', { name: 'Blog pagination' })
    for (const page of paginationPages) {
      expect(screen.getByRole('link', { name: page })).toBeInTheDocument()
    }
    expect(nav.querySelectorAll('li')).toHaveLength(5)
  })

  it('marks the active page with a black background and aria-current', () => {
    render(<Pagination />)

    const active = screen.getByRole('link', { name: activePage })
    expect(active).toHaveAttribute('aria-current', 'page')
    expect(active.className).toContain('bg-black')
    expect(active.className).toContain('text-white')

    for (const page of paginationPages.filter((item) => item !== activePage)) {
      expect(screen.getByRole('link', { name: page })).not.toHaveAttribute('aria-current')
    }
  })
})
