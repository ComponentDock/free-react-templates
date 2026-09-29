import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('renders the search input with placeholder', () => {
    render(<SearchInput value="" onChange={vi.fn()} />)
    expect(screen.getByPlaceholderText('Type here to search')).toBeInTheDocument()
  })

  it('has an accessible label', () => {
    render(<SearchInput value="" onChange={vi.fn()} />)
    expect(screen.getByLabelText('Search input')).toBeInTheDocument()
  })

  it('displays the current value', () => {
    render(<SearchInput value="react components" onChange={vi.fn()} />)
    expect(screen.getByDisplayValue('react components')).toBeInTheDocument()
  })

  it('calls onChange when user types', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<SearchInput value="" onChange={onChange} />)
    await user.type(screen.getByLabelText('Search input'), 'hello')
    expect(onChange).toHaveBeenCalledWith('h')
    expect(onChange).toHaveBeenCalledWith('e')
    expect(onChange).toHaveBeenCalledWith('l')
    expect(onChange).toHaveBeenCalledWith('l')
    expect(onChange).toHaveBeenCalledWith('o')
  })

  it('has underline border styling', () => {
    render(<SearchInput value="" onChange={vi.fn()} />)
    const input = screen.getByLabelText('Search input')
    expect(input).toHaveClass('border-b', 'border-input-border')
  })

  it('has no background or box shadow', () => {
    render(<SearchInput value="" onChange={vi.fn()} />)
    const input = screen.getByLabelText('Search input')
    expect(input).toHaveClass('bg-transparent')
  })

  it('is full width within its container', () => {
    render(<SearchInput value="" onChange={vi.fn()} />)
    const input = screen.getByLabelText('Search input')
    expect(input).toHaveClass('w-full')
  })

  it('auto-focuses on mount', () => {
    render(<SearchInput value="" onChange={vi.fn()} />)
    const input = screen.getByLabelText('Search input')
    expect(input).toHaveFocus()
  })
})
