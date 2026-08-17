import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { FilterSearch } from './FilterSearch'
import { FILTER } from '../data'

describe('FilterSearch', () => {
  it('renders the Where / Date / Guests fields and the submit button', () => {
    render(<FilterSearch />)

    expect(screen.getByLabelText(FILTER.whereLabel)).toHaveAttribute(
      'placeholder',
      FILTER.wherePlaceholder,
    )
    expect(screen.getByLabelText(FILTER.dateLabel)).toHaveAttribute(
      'placeholder',
      FILTER.datePlaceholder,
    )
    const select = screen.getByLabelText(FILTER.guestsLabel)
    expect(select).toHaveValue(FILTER.guestOptions[0])
    FILTER.guestOptions.forEach((option) => {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    })
    expect(screen.getByRole('button', { name: FILTER.button })).toBeInTheDocument()
  })

  it('updates the guests select and resets the form on submit without navigating', () => {
    render(<FilterSearch />)

    const select = screen.getByLabelText(FILTER.guestsLabel)
    fireEvent.change(select, { target: { value: FILTER.guestOptions[2] } })
    expect(select).toHaveValue(FILTER.guestOptions[2])

    const where = screen.getByLabelText(FILTER.whereLabel)
    fireEvent.change(where, { target: { value: 'Paris' } })
    expect(where).toHaveValue('Paris')

    fireEvent.submit(screen.getByRole('button', { name: FILTER.button }).closest('form')!)
    expect(screen.getByLabelText(FILTER.whereLabel)).toHaveValue('')
    expect(screen.getByLabelText(FILTER.guestsLabel)).toHaveValue(FILTER.guestOptions[0])
  })
})
