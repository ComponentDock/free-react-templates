import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Pagination } from './Pagination'
import { activePage, nextLabel, pageCount, prevLabel } from '../data'

describe('Pagination', () => {
  it('renders « previous, five pages, next » as links', () => {
    render(<Pagination />)
    const nav = screen.getByRole('navigation', { name: 'Pagination' })
    expect(screen.getByRole('link', { name: prevLabel })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: nextLabel })).toBeInTheDocument()
    for (let page = 1; page <= pageCount; page += 1) {
      expect(within(nav).getByRole('link', { name: String(page) })).toBeInTheDocument()
    }
    expect(within(nav).getAllByRole('link')).toHaveLength(pageCount + 2)
  })

  it('highlights the active page with the brand gold background', () => {
    render(<Pagination />)
    const active = screen.getByRole('link', { name: String(activePage) })
    expect(active).toHaveAttribute('aria-current', 'page')
    expect(active).toHaveClass('bg-brand', 'text-white')
    const inactive = screen.getByRole('link', { name: String(activePage + 1) })
    expect(inactive).not.toHaveAttribute('aria-current')
    expect(inactive).not.toHaveClass('bg-brand')
  })

  it('links every control back to the blog section', () => {
    render(<Pagination />)
    const links = screen.getAllByRole('link')
    links.forEach((link) => expect(link).toHaveAttribute('href', '#blog'))
  })
})
