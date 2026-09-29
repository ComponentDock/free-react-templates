import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders a search input with default placeholder', () => {
    render(<SearchBar />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders with a custom placeholder', () => {
    render(<SearchBar placeholder="Find something..." />)
    expect(screen.getByPlaceholderText('Find something...')).toBeInTheDocument()
  })

  it('displays a search icon button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const input = screen.getByPlaceholderText('Search...')
    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  it('calls onSubmit when the form is submitted', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onSubmit={onSubmit} />)
    const input = screen.getByPlaceholderText('Search...')
    await user.type(input, 'test query')
    await user.keyboard('{Enter}')
    expect(onSubmit).toHaveBeenCalledWith('test query')
  })

  it('calls onKeyDown when a key is pressed', async () => {
    const onKeyDown = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onKeyDown={onKeyDown} />)
    const input = screen.getByPlaceholderText('Search...')
    await user.type(input, 'a')
    expect(onKeyDown).toHaveBeenCalled()
  })

  it('focuses the input when the search icon is clicked', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const iconButton = screen.getByRole('button', { name: 'Search' })
    await user.click(iconButton)
    expect(screen.getByPlaceholderText('Search...')).toHaveFocus()
  })

  it('has a form with search label', () => {
    render(<SearchBar />)
    expect(screen.getByRole('form', { name: 'Search form' })).toBeInTheDocument()
  })

  it('submits empty query when input is empty', async () => {
    const onSubmit = vi.fn()
    const user = userEvent.setup()
    render(<SearchBar onSubmit={onSubmit} />)
    const input = screen.getByPlaceholderText('Search...')
    await user.click(input)
    await user.keyboard('{Enter}')
    expect(onSubmit).toHaveBeenCalledWith('')
  })
})
