import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FilterBar } from './FilterBar'

describe('FilterBar', () => {
  it('renders the search keyword input', () => {
    render(<FilterBar />)

    expect(screen.getByLabelText('Search keyword')).toBeInTheDocument()
  })

  it('renders the city dropdown', () => {
    render(<FilterBar />)

    expect(screen.getByLabelText('Select city')).toBeInTheDocument()
  })

  it('renders the state dropdown', () => {
    render(<FilterBar />)

    expect(screen.getByLabelText('Select state')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<FilterBar />)

    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has an aria-label on the form', () => {
    render(<FilterBar />)

    expect(screen.getByLabelText('Search properties')).toBeInTheDocument()
  })

  it('has an aria-label on the section', () => {
    render(<FilterBar />)

    expect(screen.getByLabelText('Property search filter')).toBeInTheDocument()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<FilterBar />)

    const input = screen.getByLabelText('Search keyword')
    await user.type(input, 'house')

    expect(input).toHaveValue('house')
  })

  it('allows selecting a city from the dropdown', async () => {
    const user = userEvent.setup()
    render(<FilterBar />)

    const citySelect = screen.getByLabelText('Select city')
    await user.selectOptions(citySelect, 'new-york')

    expect(citySelect).toHaveValue('new-york')
  })

  it('allows selecting a state from the dropdown', async () => {
    const user = userEvent.setup()
    render(<FilterBar />)

    const stateSelect = screen.getByLabelText('Select state')
    await user.selectOptions(stateSelect, 'ny')

    expect(stateSelect).toHaveValue('ny')
  })

  it('submits the form without errors', async () => {
    const user = userEvent.setup()
    render(<FilterBar />)

    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
  })
})
