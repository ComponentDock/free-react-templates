import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders Previous (disabled), the page links and Next', () => {
    render(<Pagination />)

    const previous = screen.getByRole('link', { name: 'Previous' })
    expect(previous).toHaveAttribute('aria-disabled', 'true')

    for (const page of ['1', '2', '3']) {
      expect(screen.getByRole('link', { name: page })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Next' })).toBeInTheDocument()
  })

  it('marks the first page as current', () => {
    render(<Pagination />)

    expect(screen.getByRole('link', { name: '1' })).toHaveAttribute('aria-current', 'page')
    expect(screen.getByRole('link', { name: '2' })).not.toHaveAttribute('aria-current')
  })
})
