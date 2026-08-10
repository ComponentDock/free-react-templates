import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders circular page links with the current page highlighted', () => {
    render(<Pagination />)

    const pagination = screen.getByRole('navigation', { name: 'Pagination' })
    const links = screen.getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual(['2', '3', '4', '15'])
    for (const link of links) {
      expect(link).toHaveClass('rounded-full')
    }

    const current = screen.getByText('1')
    expect(current).toHaveAttribute('aria-current', 'page')
    expect(current).toHaveClass('bg-accent', 'rounded-full')
    expect(pagination).toContainElement(current)
  })

  it('shows an ellipsis between the page links', () => {
    render(<Pagination />)

    expect(screen.getByText('…')).toBeInTheDocument()
  })
})
