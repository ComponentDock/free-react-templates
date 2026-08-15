import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import {
  dateLabel,
  searchButtonLabel,
  searchFormLabel,
  searchSectionTitle,
  travelTypeLabel,
  travelTypeOptions,
  whereToGoLabel,
} from '../data'
import { SearchStrip } from './SearchStrip'

describe('SearchStrip', () => {
  it('renders the heading, the three fields, and the Search button', () => {
    render(<SearchStrip />)
    expect(screen.getByRole('heading', { level: 2, name: searchSectionTitle })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: whereToGoLabel })).toBeInTheDocument()
    expect(screen.getByLabelText(dateLabel)).toBeInTheDocument()
    const select = screen.getByRole('combobox', { name: travelTypeLabel })
    expect(select).toBeInTheDocument()
    for (const option of travelTypeOptions) {
      expect(screen.getByRole('option', { name: option })).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: searchButtonLabel })).toBeInTheDocument()
  })

  it('submits the search form without navigation', async () => {
    const user = userEvent.setup()
    render(<SearchStrip />)

    const form = screen.getByRole('form', { name: searchFormLabel })
    await user.click(screen.getByRole('button', { name: searchButtonLabel }))
    expect(form).toBeInTheDocument()
  })
})
