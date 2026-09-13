import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DomainSearch } from './DomainSearch'

describe('DomainSearch', () => {
  it('renders search form and TLD checkboxes', () => {
    render(<DomainSearch />)
    expect(screen.getByText('Search Your Domain Now!')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter Your Domain name')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByText('.com')).toBeInTheDocument()
    expect(screen.getByText('.net')).toBeInTheDocument()
    expect(screen.getByText('.org')).toBeInTheDocument()
    expect(screen.getByText('.in')).toBeInTheDocument()
  })

  it('allows typing domain name', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    const input = screen.getByPlaceholderText('Enter Your Domain name')
    await user.type(input, 'example.com')
    expect(input).toHaveValue('example.com')
  })

  it('submits form', () => {
    render(<DomainSearch />)
    const form = screen.getByPlaceholderText('Enter Your Domain name').closest('form')!
    fireEvent.submit(form)
  })

  it('toggles TLD checkboxes', async () => {
    const user = userEvent.setup()
    render(<DomainSearch />)
    const checkbox = screen.getByLabelText(/.com/)
    await user.click(checkbox)
    expect(checkbox).toBeChecked()
    await user.click(checkbox)
    expect(checkbox).not.toBeChecked()
  })
})
