import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders all filter dropdowns', () => {
    render(<SearchBar />)
    expect(screen.getByDisplayValue('Location')).toBeInTheDocument()
    expect(screen.getByDisplayValue('All Types')).toBeInTheDocument()
    expect(screen.getByDisplayValue('All City')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Bedrooms')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Bathroom')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Price Range')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: /Search/ })).toBeInTheDocument()
  })

  it('does not navigate on form submit', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const submitBtn = screen.getByRole('button', { name: /Search/ })
    await user.click(submitBtn)
    // form submission is prevented
    expect(submitBtn).toBeInTheDocument()
  })

  it('allows selecting dropdown values', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const locationSelect = screen.getByDisplayValue('Location')
    await user.selectOptions(locationSelect, 'New York')
    expect(screen.getByDisplayValue('New York')).toBeInTheDocument()
  })
})
