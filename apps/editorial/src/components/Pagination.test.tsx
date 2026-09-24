import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders page numbers', () => {
    render(<Pagination currentPage={1} totalPages={4} />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
  })

  it('marks current page with aria-current', () => {
    render(<Pagination currentPage={2} totalPages={4} />)
    const page2 = screen.getByLabelText('Page 2')
    expect(page2).toHaveAttribute('aria-current', 'page')
  })

  it('disables previous button on first page', () => {
    render(<Pagination currentPage={1} totalPages={4} />)
    const prev = screen.getByLabelText('Previous page')
    expect(prev).toBeDisabled()
  })

  it('disables next button on last page', () => {
    render(<Pagination currentPage={4} totalPages={4} />)
    const next = screen.getByLabelText('Next page')
    expect(next).toBeDisabled()
  })

  it('enables both arrows when not on first or last page', () => {
    render(<Pagination currentPage={2} totalPages={4} />)
    const prev = screen.getByLabelText('Previous page')
    const next = screen.getByLabelText('Next page')
    expect(prev).not.toBeDisabled()
    expect(next).not.toBeDisabled()
  })

  it('has the correct nav aria-label', () => {
    render(<Pagination currentPage={1} totalPages={4} />)
    expect(screen.getByLabelText('Pagination')).toBeInTheDocument()
  })
})
