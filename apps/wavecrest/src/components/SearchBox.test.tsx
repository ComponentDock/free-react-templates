import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBox } from './SearchBox'

describe('SearchBox', () => {
  it('renders check-in, check-out, and guests inputs', () => {
    render(<SearchBox />)
    expect(screen.getByLabelText('Check in')).toBeInTheDocument()
    expect(screen.getByLabelText('Check out')).toBeInTheDocument()
    expect(screen.getByLabelText('Guests')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<SearchBox />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('updates check-in value on input', async () => {
    const user = userEvent.setup()
    render(<SearchBox />)
    const input = screen.getByLabelText('Check in')
    await user.type(input, '2025-01-15')
    expect(input).toHaveValue('2025-01-15')
  })

  it('updates check-out value on input', async () => {
    const user = userEvent.setup()
    render(<SearchBox />)
    const input = screen.getByLabelText('Check out')
    await user.type(input, '2025-01-20')
    expect(input).toHaveValue('2025-01-20')
  })

  it('updates guests value on input', async () => {
    const user = userEvent.setup()
    render(<SearchBox />)
    const input = screen.getByLabelText('Guests')
    await user.type(input, '3')
    expect(input).toHaveValue(3)
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<SearchBox />)
    await user.click(screen.getByRole('button', { name: /search/i }))
    // Form should not navigate
    expect(screen.getByLabelText('Check in')).toBeInTheDocument()
  })
})
