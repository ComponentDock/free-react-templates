import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('renders heading, input, dropdown, and search button', () => {
    render(<DomainSearch />)
    expect(screen.getByText('Search Your Domain Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Domain name')).toBeInTheDocument()
    expect(screen.getByLabelText('Domain extension')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('displays domain prices', () => {
    render(<DomainSearch />)
    // .com appears in both select option and price display
    expect(screen.getAllByText('.com').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$9.75')).toBeInTheDocument()
    expect(screen.getAllByText('.net').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('$9.50')).toBeInTheDocument()
  })

  it('allows typing in domain input', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    const input = screen.getByLabelText('Domain name')
    await user.type(input, 'mywebsite')
    expect(input).toHaveValue('mywebsite')
  })

  it('allows changing extension', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    const select = screen.getByLabelText('Domain extension')
    await user.selectOptions(select, '.net')
    expect(select).toHaveValue('.net')
  })
})
