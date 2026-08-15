import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import {
  checkInLabel,
  checkOutLabel,
  destinationLabel,
  destinationPlaceholder,
  priceLabel,
  priceOptions,
  searchButtonLabel,
  searchSectionLabel,
} from '../data'
import { SearchPanel } from './SearchPanel'

describe('SearchPanel', () => {
  it('renders the four labelled fields and the search button', () => {
    render(<SearchPanel />)
    expect(screen.getByRole('region', { name: searchSectionLabel })).toBeInTheDocument()
    expect(screen.getByLabelText(destinationLabel)).toHaveAttribute(
      'placeholder',
      destinationPlaceholder,
    )
    expect(screen.getByLabelText(checkInLabel)).toBeInTheDocument()
    expect(screen.getByLabelText(checkOutLabel)).toBeInTheDocument()

    const price = screen.getByLabelText(priceLabel)
    expect(price).toBeInstanceOf(HTMLSelectElement)
    expect(screen.getByRole('button', { name: searchButtonLabel })).toBeInTheDocument()
  })

  it('lists every price option from the data', () => {
    render(<SearchPanel />)
    const price = screen.getByLabelText(priceLabel)
    for (const option of priceOptions) {
      expect(withinSelect(price, option)).toBe(true)
    }
  })
})

function withinSelect(select: HTMLElement, value: string) {
  return Array.from(select.querySelectorAll('option')).some(
    (option) => option.textContent === value,
  )
}
