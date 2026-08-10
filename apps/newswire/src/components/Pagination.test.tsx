import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders numbered page links with the first page marked current', () => {
    render(<Pagination />)

    const nav = screen.getByRole('navigation', { name: 'Pagination' })
    const links = within(nav).getAllByRole('link')
    expect(links.map((link) => link.textContent)).toEqual(['1', '2', '3', '4'])

    expect(within(nav).getByRole('link', { name: '1' })).toHaveAttribute('aria-current', 'page')
    expect(within(nav).getByRole('link', { name: '2' })).not.toHaveAttribute('aria-current')
  })
})
