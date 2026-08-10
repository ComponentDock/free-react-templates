import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'
import { pages } from '../data'

describe('Pagination', () => {
  it('renders square numbered pages with the first active', () => {
    render(<Pagination />)
    const pagination = screen.getByRole('navigation', { name: 'Pagination' })
    expect(pagination).toBeInTheDocument()
    for (const [index, page] of pages.entries()) {
      const link = screen.getByRole('link', { name: `Page ${index + 1}` })
      expect(link).toHaveTextContent(page)
      if (index === 0) {
        expect(link).toHaveAttribute('aria-current', 'page')
      } else {
        expect(link).not.toHaveAttribute('aria-current')
      }
    }
  })
})
