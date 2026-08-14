import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FilterBand } from './FilterBand'
import { FILTER_FIELDS } from '../data'

describe('FilterBand', () => {
  it('shows the For Rent tab as active and For Sale as idle', () => {
    render(<FilterBand />)

    const rentTab = screen.getByRole('tab', { name: 'For Rent' })
    const saleTab = screen.getByRole('tab', { name: 'For Sale' })
    expect(rentTab).toHaveAttribute('aria-selected', 'true')
    expect(rentTab.className).toMatch(/bg-brand/)
    expect(saleTab).toHaveAttribute('aria-selected', 'false')
    expect(saleTab.className).toMatch(/bg-white/)
  })

  it('renders the search selects, inputs and submit button', () => {
    render(<FilterBand />)

    expect(screen.getByRole('combobox', { name: 'Property type' })).toHaveDisplayValue(
      FILTER_FIELDS.types[0],
    )
    expect(screen.getByRole('combobox', { name: 'Bedrooms' })).toHaveDisplayValue(
      FILTER_FIELDS.bedrooms[0],
    )
    expect(screen.getByRole('combobox', { name: 'Bathrooms' })).toHaveDisplayValue(
      FILTER_FIELDS.bathrooms[0],
    )
    expect(screen.getByRole('combobox', { name: 'Minimum price' })).toHaveDisplayValue(
      FILTER_FIELDS.minPrice[0],
    )
    expect(screen.getByRole('combobox', { name: 'Maximum price' })).toHaveDisplayValue(
      FILTER_FIELDS.maxPrice[0],
    )

    expect(screen.getByRole('textbox', { name: 'Title' })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: 'Address' })).toBeInTheDocument()

    const submit = screen.getByRole('button', { name: 'Submit' })
    expect(submit.className).toMatch(/bg-ink/)
  })

  it('switches between the For Sale and For Rent panes', async () => {
    const user = userEvent.setup()
    render(<FilterBand />)

    const saleTab = screen.getByRole('tab', { name: 'For Sale' })
    await user.click(saleTab)

    expect(saleTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'For Sale' })).toBeInTheDocument()
    expect(screen.queryByRole('tabpanel', { name: 'For Rent' })).not.toBeInTheDocument()
    // The same field set is present in the For Sale pane.
    expect(screen.getByRole('textbox', { name: 'Title' })).toBeInTheDocument()

    const rentTab = screen.getByRole('tab', { name: 'For Rent' })
    await user.click(rentTab)
    expect(rentTab).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByRole('tabpanel', { name: 'For Rent' })).toBeInTheDocument()
    expect(screen.queryByRole('tabpanel', { name: 'For Sale' })).not.toBeInTheDocument()
  })
})
