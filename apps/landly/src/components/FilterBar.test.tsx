import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { FilterBar } from './FilterBar'
import {
  bathroomOptions,
  bedroomOptions,
  filterSubmit,
  maxPrices,
  minPrices,
  propertyTypes,
  searchLabels,
} from '../data'

describe('FilterBar', () => {
  it('starts on For Rent with the rental pane visible', () => {
    render(<FilterBar />)
    const rent = screen.getByRole('tab', { name: 'For Rent' })
    const sale = screen.getByRole('tab', { name: 'For Sale' })

    expect(rent).toHaveAttribute('aria-selected', 'true')
    expect(sale).toHaveAttribute('aria-selected', 'false')
    expect(rent).toHaveClass('bg-brand')
    expect(sale).toHaveClass('bg-white')

    const panel = screen.getByRole('tabpanel', { name: 'For Rent' })
    expect(panel).not.toHaveAttribute('hidden')
    expect(screen.queryByRole('tabpanel', { name: 'For Sale' })).not.toBeInTheDocument()
  })

  it('switches panes when the other tab is picked', async () => {
    const user = userEvent.setup()
    render(<FilterBar />)

    await user.click(screen.getByRole('tab', { name: 'For Sale' }))

    expect(screen.getByRole('tab', { name: 'For Sale' })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByRole('tab', { name: 'For Rent' })).toHaveAttribute(
      'aria-selected',
      'false',
    )
    const panel = screen.getByRole('tabpanel', { name: 'For Sale' })
    expect(panel).not.toHaveAttribute('hidden')
    expect(screen.queryByRole('tabpanel', { name: 'For Rent' })).not.toBeInTheDocument()
  })

  it('renders the reference search form in every pane', async () => {
    const user = userEvent.setup()
    render(<FilterBar />)

    for (const tabName of ['For Rent', 'For Sale']) {
      if (tabName !== 'For Rent') {
        await user.click(screen.getByRole('tab', { name: tabName }))
      }
      const panel = screen.getByRole('tabpanel', { name: tabName })
      expect(within(panel).getByRole('form', { name: `${tabName} property search` })).toBeTruthy()

      const type = within(panel).getByLabelText(searchLabels.type)
      expect(within(type).getAllByRole('option')).toHaveLength(propertyTypes.length)
      expect(within(panel).getByLabelText(searchLabels.title)).toHaveAttribute(
        'placeholder',
        searchLabels.title,
      )
      expect(within(panel).getByLabelText(searchLabels.address)).toHaveAttribute(
        'placeholder',
        searchLabels.address,
      )
      expect(
        within(within(panel).getByLabelText(searchLabels.bedrooms)).getAllByRole('option'),
      ).toHaveLength(bedroomOptions.length)
      expect(
        within(within(panel).getByLabelText(searchLabels.bathrooms)).getAllByRole('option'),
      ).toHaveLength(bathroomOptions.length)
      expect(
        within(within(panel).getByLabelText(searchLabels.minPrice)).getAllByRole('option'),
      ).toHaveLength(minPrices.length)
      expect(
        within(within(panel).getByLabelText(searchLabels.maxPrice)).getAllByRole('option'),
      ).toHaveLength(maxPrices.length)
      expect(within(panel).getByRole('button', { name: filterSubmit })).toHaveAttribute(
        'type',
        'submit',
      )
    }
  })

  it('keeps the search on the page when the form is submitted', async () => {
    const user = userEvent.setup()
    render(<FilterBar />)

    const panel = screen.getByRole('tabpanel', { name: 'For Rent' })
    await user.type(within(panel).getByLabelText(searchLabels.title), 'Sapling Street')
    await user.click(within(panel).getByRole('button', { name: filterSubmit }))

    expect(within(panel).getByLabelText(searchLabels.title)).toHaveValue('Sapling Street')
  })
})
