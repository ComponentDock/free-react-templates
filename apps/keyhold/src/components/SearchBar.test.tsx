import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { SearchBar } from './SearchBar'

function optionLabels(select: HTMLSelectElement): string[] {
  return Array.from(select.querySelectorAll('option')).map((o) => o.textContent ?? '')
}

describe('SearchBar', () => {
  it('renders the four search fields and the submit button', () => {
    render(<SearchBar />)

    expect(screen.getByLabelText(/location/i)).toHaveAttribute('placeholder', 'City/Locality Name')
    expect(screen.getByLabelText(/property type/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/property status/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/price limit/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search Property' })).toBeInTheDocument()
  })

  it('shows all property type, status, and price options', () => {
    render(<SearchBar />)

    expect(optionLabels(screen.getByLabelText(/property type/i) as HTMLSelectElement)).toEqual([
      'Type',
      'Commercial',
      'Office',
      'Residential',
      'Villa',
      'Condominium',
      'Apartment',
    ])
    expect(optionLabels(screen.getByLabelText(/property status/i) as HTMLSelectElement)).toEqual([
      'Type',
      'Rent',
      'Sale',
    ])
    const price = optionLabels(screen.getByLabelText(/price limit/i) as HTMLSelectElement)
    expect(price[0]).toBe('$5,000')
    expect(price[price.length - 1]).toBe('$2,000,000')
    expect(price.length).toBeGreaterThanOrEqual(8)
  })

  it('prevents default submission, clears the fields, and confirms', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)

    await user.type(screen.getByLabelText(/location/i), 'Austin')
    await user.selectOptions(screen.getByLabelText(/property type/i), 'Villa')
    await user.selectOptions(screen.getByLabelText(/property status/i), 'Sale')
    await user.selectOptions(screen.getByLabelText(/price limit/i), '$100,000')
    await user.click(screen.getByRole('button', { name: 'Search Property' }))

    expect(screen.getByRole('status')).toHaveTextContent(/search complete/i)
    expect(screen.getByLabelText(/location/i)).toHaveValue('')
    expect(screen.getByLabelText(/property type/i)).toHaveValue('Type')
    expect(screen.getByLabelText(/property status/i)).toHaveValue('Type')
    expect(screen.getByLabelText(/price limit/i)).toHaveValue('$5,000')
  })
})
