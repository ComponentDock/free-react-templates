import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  cityLabel,
  cityOptions,
  countryLabel,
  countryOptions,
  donationCards,
  readMoreLabel,
  searchButtonLabel,
  searchTitle,
} from '../data'
import { SearchSection } from './SearchSection'

describe('SearchSection', () => {
  it('renders the yellow search panel with selects and a search button', () => {
    render(<SearchSection />)
    expect(screen.getByRole('heading', { name: searchTitle })).toBeInTheDocument()

    const country = screen.getByLabelText(countryLabel)
    const city = screen.getByLabelText(cityLabel)
    expect(country).toHaveValue(countryOptions[0])
    expect(city).toHaveValue(cityOptions[0])
    expect(screen.getByRole('button', { name: searchButtonLabel })).toBeInTheDocument()
  })

  it('changes the select values', async () => {
    const user = userEvent.setup()
    render(<SearchSection />)
    const country = screen.getByLabelText(countryLabel)
    const city = screen.getByLabelText(cityLabel)
    await user.selectOptions(country, countryOptions[1])
    expect(country).toHaveValue(countryOptions[1])
    await user.selectOptions(city, cityOptions[2])
    expect(city).toHaveValue(cityOptions[2])
  })

  it('renders three donation cards with read-more links', () => {
    render(<SearchSection />)
    expect(screen.getAllByRole('heading', { name: 'donation' })).toHaveLength(donationCards.length)
    expect(screen.getAllByRole('link', { name: readMoreLabel })).toHaveLength(donationCards.length)
  })
})
