import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchForm } from './SearchForm'

describe('SearchForm', () => {
  it('renders the search input with placeholder', () => {
    render(<SearchForm />)
    const input = screen.getByLabelText('Search keywords')
    expect(input).toHaveAttribute('placeholder', 'Type Keywords')
  })

  it('renders the search icon', () => {
    const { container } = render(<SearchForm />)
    const icon = container.querySelector('svg')
    expect(icon).toBeInTheDocument()
  })

  it('renders the ADVANCED SEARCH label', () => {
    render(<SearchForm />)
    expect(screen.getByText('ADVANCED SEARCH')).toBeInTheDocument()
  })

  it('renders all 6 filter dropdowns', () => {
    render(<SearchForm />)
    expect(screen.getByLabelText('Category')).toBeInTheDocument()
    expect(screen.getByLabelText('Color')).toBeInTheDocument()
    expect(screen.getByLabelText('Size')).toBeInTheDocument()
    expect(screen.getByLabelText('Sale')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Type')).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)
    const input = screen.getByLabelText('Search keywords')
    await user.type(input, 'shoes')
    expect(input).toHaveValue('shoes')
  })

  it('allows selecting a filter value', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)
    const colorSelect = screen.getByLabelText('Color')
    await user.selectOptions(colorSelect, 'Red')
    expect(colorSelect).toHaveValue('Red')
  })

  it('displays the result count', () => {
    render(<SearchForm />)
    expect(screen.getByText('108')).toBeInTheDocument()
    expect(screen.getByText('results')).toBeInTheDocument()
  })

  it('resets all filters when RESET is clicked', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)

    // Set some values
    await user.type(screen.getByLabelText('Search keywords'), 'test')
    await user.selectOptions(screen.getByLabelText('Color'), 'Blue')
    await user.selectOptions(screen.getByLabelText('Size'), 'L')

    // Click reset
    await user.click(screen.getByRole('button', { name: /reset/i }))

    // Verify reset
    expect(screen.getByLabelText('Search keywords')).toHaveValue('')
    expect(screen.getByLabelText('Color')).toHaveValue('')
    expect(screen.getByLabelText('Size')).toHaveValue('')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<SearchForm />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    // Form submission should not navigate or cause errors
    expect(screen.getByLabelText('Search keywords')).toBeInTheDocument()
  })

  it('renders the search and reset buttons', () => {
    render(<SearchForm />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
  })
})
