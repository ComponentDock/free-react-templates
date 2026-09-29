import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders a search form with input and button', () => {
    render(<SearchBar onSearch={vi.fn()} />)
    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByLabelText('Search input')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has pill-shaped styling', () => {
    render(<SearchBar onSearch={vi.fn()} />)
    const form = screen.getByRole('search')
    expect(form).toHaveClass('rounded-full', 'border-2', 'border-[#d0e3f7]', 'bg-white')
  })

  it('shows placeholder text', () => {
    render(<SearchBar onSearch={vi.fn()} />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('calls onSearch with trimmed value on form submit', async () => {
    const onSearch = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onSearch={onSearch} />)
    await user.type(screen.getByLabelText('Search input'), 'vacation')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(onSearch).toHaveBeenCalledWith('vacation')
  })

  it('calls onSearch on Enter key press', async () => {
    const onSearch = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onSearch={onSearch} />)
    await user.type(screen.getByLabelText('Search input'), 'beach{Enter}')
    expect(onSearch).toHaveBeenCalledWith('beach')
  })

  it('trims whitespace from queries', async () => {
    const onSearch = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onSearch={onSearch} />)
    await user.type(screen.getByLabelText('Search input'), '  hello  ')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(onSearch).toHaveBeenCalledWith('hello')
  })

  it('does not call onSearch for empty input', async () => {
    const onSearch = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onSearch={onSearch} />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(onSearch).not.toHaveBeenCalled()
  })

  it('does not call onSearch for whitespace-only input', async () => {
    const onSearch = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onSearch={onSearch} />)
    await user.type(screen.getByLabelText('Search input'), '   ')
    await user.click(screen.getByRole('button', { name: /search/i }))
    expect(onSearch).not.toHaveBeenCalled()
  })

  it('has blue button with white text', () => {
    render(<SearchBar onSearch={vi.fn()} />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button).toHaveClass('bg-[#4a8cf7]', 'text-white', 'rounded-full')
  })

  it('input accepts text', async () => {
    const user = userEvent.setup()
    render(<SearchBar onSearch={vi.fn()} />)
    const input = screen.getByLabelText('Search input')
    await user.type(input, 'test query')
    expect(input).toHaveValue('test query')
  })
})
