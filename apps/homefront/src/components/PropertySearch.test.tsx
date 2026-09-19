import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PropertySearch } from './PropertySearch'

describe('PropertySearch', () => {
  it('renders the search heading', () => {
    render(<PropertySearch />)
    expect(screen.getByText('Search Property')).toBeInTheDocument()
  })

  it('renders keyword and location inputs', () => {
    render(<PropertySearch />)
    expect(screen.getByLabelText('Keyword')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
  })

  it('renders property type dropdown', () => {
    render(<PropertySearch />)
    expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
  })

  it('renders property status dropdown', () => {
    render(<PropertySearch />)
    expect(screen.getByLabelText('Property Status')).toBeInTheDocument()
  })

  it('renders min/max price inputs', () => {
    render(<PropertySearch />)
    expect(screen.getByLabelText('Min Price')).toBeInTheDocument()
    expect(screen.getByLabelText('Max Price')).toBeInTheDocument()
  })

  it('renders beds dropdown', () => {
    render(<PropertySearch />)
    expect(screen.getByLabelText('Min Beds')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<PropertySearch />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('allows typing in keyword field', async () => {
    const user = userEvent.setup()
    render(<PropertySearch />)
    const input = screen.getByLabelText('Keyword')
    await user.type(input, 'ocean')
    expect(input).toHaveValue('ocean')
  })

  it('submits form without errors', async () => {
    const user = userEvent.setup()
    render(<PropertySearch />)
    await user.click(screen.getByRole('button', { name: /search/i }))
  })
})
