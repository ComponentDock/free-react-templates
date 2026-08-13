import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FilterSearch } from './FilterSearch'

describe('FilterSearch', () => {
  it('renders all fields, labels and the search button', () => {
    render(<FilterSearch />)
    expect(screen.getByText('Location')).toBeInTheDocument()
    expect(screen.getByText('Property Type')).toBeInTheDocument()
    expect(screen.getByText('Price')).toBeInTheDocument()
    expect(screen.getByText('Bedrooms')).toBeInTheDocument()
    expect(screen.getByText('Bathrooms')).toBeInTheDocument()
    expect(screen.getByLabelText('Minimum price')).toHaveValue('50')
    expect(screen.getByLabelText('Maximum price')).toHaveValue('300')
    expect(screen.getByText('$50k – $300k')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('shows the default location and property type options', () => {
    render(<FilterSearch />)
    expect(screen.getByDisplayValue('London')).toBeInTheDocument()
    expect(screen.getByDisplayValue('House')).toBeInTheDocument()
    expect(screen.getAllByRole('option')).toHaveLength(6)
  })

  it('updates the selects, pills and price range', async () => {
    const user = userEvent.setup()
    render(<FilterSearch />)
    await user.selectOptions(screen.getByDisplayValue('London'), 'UAE')
    expect(screen.getByDisplayValue('UAE')).toBeInTheDocument()
    await user.selectOptions(screen.getByDisplayValue('House'), 'Resort')
    expect(screen.getByDisplayValue('Resort')).toBeInTheDocument()
    const bedrooms = screen.getByRole('group', { name: 'Bedrooms' })
    await user.click(within(bedrooms).getByRole('radio', { name: '4+' }))
    expect(within(bedrooms).getByRole('radio', { name: '4+' })).toBeChecked()
    const bathrooms = screen.getByRole('group', { name: 'Bathrooms' })
    await user.click(within(bathrooms).getByRole('radio', { name: '2' }))
    expect(within(bathrooms).getByRole('radio', { name: '2' })).toBeChecked()
    const minPrice = screen.getByLabelText('Minimum price')
    fireEvent.change(minPrice, { target: { value: '75' } })
    expect(screen.getByText('$75k – $300k')).toBeInTheDocument()
    const maxPrice = screen.getByLabelText('Maximum price')
    fireEvent.change(maxPrice, { target: { value: '250' } })
    expect(screen.getByText('$75k – $250k')).toBeInTheDocument()
  })

  it('submits the search form without navigating', async () => {
    const user = userEvent.setup()
    render(<FilterSearch />)
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})
