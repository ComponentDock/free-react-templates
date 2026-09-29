import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders all form fields and the submit button', () => {
    render(<SearchBar />)

    expect(screen.getByLabelText(/keywords/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/budget/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search job/i })).toBeInTheDocument()
  })

  it('displays placeholder text in keyword and location inputs', () => {
    render(<SearchBar />)

    expect(screen.getByPlaceholderText(/keywords/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/location/i)).toBeInTheDocument()
  })

  it('has budget select with default value', () => {
    render(<SearchBar />)

    const select = screen.getByLabelText(/budget/i) as HTMLSelectElement
    expect(select.value).toBe('Budget: $100 - $200')
  })

  it('allows typing in the keywords field', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)

    const input = screen.getByLabelText(/keywords/i)
    await user.type(input, 'developer')

    expect(input).toHaveValue('developer')
  })

  it('allows typing in the location field', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)

    const input = screen.getByLabelText(/location/i)
    await user.type(input, 'New York')

    expect(input).toHaveValue('New York')
  })

  it('allows selecting a different budget option', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)

    const select = screen.getByLabelText(/budget/i) as HTMLSelectElement
    await user.selectOptions(select, 'Budget: $400 - $600')

    expect(select.value).toBe('Budget: $400 - $600')
  })

  it('calls onSearch with form values on submit', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    await user.type(screen.getByLabelText(/keywords/i), 'designer')
    await user.type(screen.getByLabelText(/location/i), 'London')
    await user.selectOptions(screen.getByLabelText(/budget/i), 'Budget: $600 - $800')
    await user.click(screen.getByRole('button', { name: /search job/i }))

    expect(onSearch).toHaveBeenCalledWith({
      keywords: 'designer',
      location: 'London',
      budget: 'Budget: $600 - $800',
    })
  })

  it('submits with empty fields when no input provided', async () => {
    const user = userEvent.setup()
    const onSearch = vi.fn()
    render(<SearchBar onSearch={onSearch} />)

    await user.click(screen.getByRole('button', { name: /search job/i }))

    expect(onSearch).toHaveBeenCalledWith({
      keywords: '',
      location: '',
      budget: 'Budget: $100 - $200',
    })
  })

  it('has a search role for accessibility', () => {
    render(<SearchBar />)

    expect(screen.getByRole('search', { name: /job search/i })).toBeInTheDocument()
  })
})
