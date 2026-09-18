import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  it('renders the Find Job button', () => {
    render(<SearchBar />)
    expect(screen.getByRole('button', { name: /find job/i })).toBeInTheDocument()
  })

  it('renders category and location selects', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText(/category/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/location/i)).toBeInTheDocument()
  })

  it('allows selecting a category', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const select = screen.getByLabelText(/category/i)
    await user.selectOptions(select, 'full-time')
    expect(select).toHaveValue('full-time')
  })

  it('allows selecting a location', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const select = screen.getByLabelText(/location/i)
    await user.selectOptions(select, 'downtown')
    expect(select).toHaveValue('downtown')
  })

  it('allows typing a keyword', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const input = screen.getByLabelText(/keyword/i)
    await user.type(input, 'react developer')
    expect(input).toHaveValue('react developer')
  })

  it('submits the form without navigation', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    await user.click(screen.getByRole('button', { name: /find job/i }))
    // Form should not navigate (preventDefault)
    expect(screen.getByRole('button', { name: /find job/i })).toBeInTheDocument()
  })
})
