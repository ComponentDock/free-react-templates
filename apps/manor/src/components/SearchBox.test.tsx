import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { SearchBox } from './SearchBox'

describe('SearchBox', () => {
  it('renders search title and all filter dropdowns', () => {
    render(<SearchBox />)
    expect(screen.getByText('search your home')).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /keywords/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /property id/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /property status/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /location/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /property type/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /bedrooms/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /bathrooms/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /min price/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /max price/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /min sq ft/i })).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /max sq ft/i })).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<SearchBox />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('toggles specific features on click', async () => {
    const user = userEvent.setup()
    render(<SearchBox />)
    const trigger = screen.getByText('Specific features')
    expect(screen.queryByText('Swimming Pool')).not.toBeInTheDocument()
    await user.click(trigger)
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
    expect(screen.getByText('Garage')).toBeInTheDocument()
    await user.click(trigger)
    expect(screen.queryByText('Swimming Pool')).not.toBeInTheDocument()
  })

  it('renders all feature checkboxes when expanded', async () => {
    const user = userEvent.setup()
    render(<SearchBox />)
    await user.click(screen.getByText('Specific features'))
    const checkboxes = screen.getAllByRole('checkbox')
    expect(checkboxes).toHaveLength(10)
  })

  it('submits search form without error', async () => {
    render(<SearchBox />)
    const form = document.querySelector('form')!
    fireEvent.submit(form)
  })
})
