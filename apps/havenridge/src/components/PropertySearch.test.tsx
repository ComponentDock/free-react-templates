import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PropertySearch } from './PropertySearch'

describe('PropertySearch', () => {
  it('renders Buy Properties and Rent Properties tabs', () => {
    render(<PropertySearch />)
    expect(screen.getByRole('button', { name: 'Buy Properties' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Rent Properties' })).toBeInTheDocument()
  })

  it('defaults to Buy tab being active', () => {
    render(<PropertySearch />)
    const buyBtn = screen.getByRole('button', { name: 'Buy Properties' })
    expect(buyBtn.className).toContain('bg-primary-500')
  })

  it('switches to Rent tab when clicked', async () => {
    const user = userEvent.setup()
    render(<PropertySearch />)

    await user.click(screen.getByRole('button', { name: 'Rent Properties' }))

    const rentBtn = screen.getByRole('button', { name: 'Rent Properties' })
    expect(rentBtn.className).toContain('bg-primary-500')
  })

  it('switches back to Buy tab when clicked', async () => {
    const user = userEvent.setup()
    render(<PropertySearch />)

    await user.click(screen.getByRole('button', { name: 'Rent Properties' }))
    await user.click(screen.getByRole('button', { name: 'Buy Properties' }))

    const buyBtn = screen.getByRole('button', { name: 'Buy Properties' })
    expect(buyBtn.className).toContain('bg-primary-500')
  })

  it('renders all form fields', () => {
    render(<PropertySearch />)
    expect(screen.getByLabelText('Keyword')).toBeInTheDocument()
    expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
    expect(screen.getByLabelText('Location')).toBeInTheDocument()
    expect(screen.getByLabelText('Price Limit')).toBeInTheDocument()
  })

  it('renders the search button', () => {
    render(<PropertySearch />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('has property type dropdown with options', () => {
    render(<PropertySearch />)
    const select = screen.getByLabelText('Property Type')
    expect(select).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Select Type' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Residential' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Commercial' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Land' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Industrial' })).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<PropertySearch />)

    const submitBtn = screen.getByRole('button', { name: 'Search' })
    await user.click(submitBtn)
  })
})
