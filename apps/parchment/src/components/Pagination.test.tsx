import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './Pagination'
import {
  lastPage,
  nextPageLabel,
  pageLabel,
  paginationLabel,
  paginationPages,
  previousPageLabel,
} from '../data'

describe('Pagination', () => {
  it('renders prev, page numbers with an ellipsis, and next', () => {
    render(<Pagination />)
    const nav = screen.getByRole('navigation', { name: paginationLabel })
    expect(nav).toBeInTheDocument()

    for (const page of paginationPages) {
      if (page === '…') {
        expect(screen.getByText('…')).toBeInTheDocument()
      } else {
        expect(screen.getByRole('button', { name: pageLabel(page) })).toBeInTheDocument()
      }
    }
    expect(screen.getByRole('button', { name: previousPageLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: nextPageLabel })).toBeInTheDocument()
  })

  it('marks the first page as current and moves it on click', async () => {
    const user = userEvent.setup()
    render(<Pagination />)

    expect(screen.getByRole('button', { name: pageLabel(1) })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await user.click(screen.getByRole('button', { name: pageLabel(3) }))
    expect(screen.getByRole('button', { name: pageLabel(1) })).not.toHaveAttribute('aria-current')
    expect(screen.getByRole('button', { name: pageLabel(3) })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })

  it('clamps prev/next to the first and last pages', async () => {
    const user = userEvent.setup()
    render(<Pagination />)

    await user.click(screen.getByRole('button', { name: previousPageLabel }))
    expect(screen.getByRole('button', { name: pageLabel(1) })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await user.click(screen.getByRole('button', { name: pageLabel(3) }))
    await user.click(screen.getByRole('button', { name: previousPageLabel }))
    expect(screen.getByRole('button', { name: pageLabel(2) })).toHaveAttribute(
      'aria-current',
      'page',
    )

    await user.click(screen.getByRole('button', { name: pageLabel(lastPage) }))
    await user.click(screen.getByRole('button', { name: nextPageLabel }))
    expect(screen.getByRole('button', { name: pageLabel(lastPage) })).toHaveAttribute(
      'aria-current',
      'page',
    )
  })
})
