import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from './Pagination'

describe('Pagination', () => {
  it('renders page numbers 1-5', () => {
    render(<Pagination />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getByText('5')).toBeInTheDocument()
  })

  it('renders prev and next buttons', () => {
    render(<Pagination />)
    expect(screen.getByLabelText('Previous page')).toBeInTheDocument()
    expect(screen.getByLabelText('Next page')).toBeInTheDocument()
  })

  it('page 1 is active by default', () => {
    render(<Pagination />)
    const page1 = screen.getByLabelText('Page 1')
    expect(page1).toHaveAttribute('aria-current', 'page')
  })

  it('clicking a page button makes it active', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByLabelText('Page 3'))
    expect(screen.getByLabelText('Page 3')).toHaveAttribute('aria-current', 'page')
    expect(screen.getByLabelText('Page 1')).not.toHaveAttribute('aria-current', 'page')
  })

  it('clicking next increments the active page', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByLabelText('Next page'))
    expect(screen.getByLabelText('Page 2')).toHaveAttribute('aria-current', 'page')
  })

  it('clicking previous decrements the active page', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByLabelText('Page 3'))
    await user.click(screen.getByLabelText('Previous page'))
    expect(screen.getByLabelText('Page 2')).toHaveAttribute('aria-current', 'page')
  })

  it('previous does not go below 1', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByLabelText('Previous page'))
    expect(screen.getByLabelText('Page 1')).toHaveAttribute('aria-current', 'page')
  })

  it('next does not go above 5', async () => {
    const user = userEvent.setup()
    render(<Pagination />)
    await user.click(screen.getByLabelText('Next page'))
    await user.click(screen.getByLabelText('Next page'))
    await user.click(screen.getByLabelText('Next page'))
    await user.click(screen.getByLabelText('Next page'))
    await user.click(screen.getByLabelText('Next page'))
    await user.click(screen.getByLabelText('Next page'))
    expect(screen.getByLabelText('Page 5')).toHaveAttribute('aria-current', 'page')
  })
})
