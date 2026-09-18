import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders all tabs and search fields', () => {
    render(<SearchBar />)

    for (const tab of ['Tour', 'Hotel', 'Destination']) {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    }

    expect(screen.getByLabelText('Destination')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('switches active tab on click', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)

    await user.click(screen.getByRole('button', { name: 'Hotel' }))
    expect(screen.getByRole('button', { name: 'Hotel' })).toHaveClass('border-brand')

    await user.click(screen.getByRole('button', { name: 'Destination' }))
    expect(screen.getByRole('button', { name: 'Destination' })).toHaveClass('border-brand')
  })

  it('defaults to Tour tab as active', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: 'Tour' })).toHaveClass('border-brand')
  })
})
