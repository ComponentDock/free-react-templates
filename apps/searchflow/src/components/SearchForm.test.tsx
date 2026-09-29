import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SearchForm } from './SearchForm'

describe('SearchForm', () => {
  it('renders input with placeholder', () => {
    render(<SearchForm onSearch={vi.fn()} />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders Search button', () => {
    render(<SearchForm onSearch={vi.fn()} />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('calls onSearch when form is submitted with text', async () => {
    const onSearch = vi.fn()
    render(<SearchForm onSearch={onSearch} />)
    const input = screen.getByPlaceholderText('Search...')
    await userEvent.type(input, 'vacation')
    await userEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(onSearch).toHaveBeenCalledWith('vacation')
  })

  it('calls onSearch when Enter key is pressed', async () => {
    const onSearch = vi.fn()
    render(<SearchForm onSearch={onSearch} />)
    const input = screen.getByPlaceholderText('Search...')
    await userEvent.type(input, 'beach')
    await userEvent.keyboard('{Enter}')
    expect(onSearch).toHaveBeenCalledWith('beach')
  })

  it('does not call onSearch when input is empty', async () => {
    const onSearch = vi.fn()
    render(<SearchForm onSearch={onSearch} />)
    await userEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(onSearch).not.toHaveBeenCalled()
  })

  it('does not call onSearch when input is only whitespace', async () => {
    const onSearch = vi.fn()
    render(<SearchForm onSearch={onSearch} />)
    const input = screen.getByPlaceholderText('Search...')
    await userEvent.type(input, '   ')
    await userEvent.click(screen.getByRole('button', { name: 'Search' }))
    expect(onSearch).not.toHaveBeenCalled()
  })

  it('has squared-off corners, not pill shape', () => {
    render(<SearchForm onSearch={vi.fn()} />)
    const form = screen.getByRole('search')
    expect(form.className).toContain('rounded')
    expect(form.className).not.toContain('rounded-full')
  })

  it('has light gray border', () => {
    render(<SearchForm onSearch={vi.fn()} />)
    const form = screen.getByRole('search')
    expect(form.className).toContain('border-[#e0e0e0]')
  })
})
