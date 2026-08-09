import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CarSearch } from './CarSearch'

describe('CarSearch', () => {
  it('renders the rental tab by default with labeled selects and a search button', () => {
    render(<CarSearch />)
    expect(screen.getByRole('heading', { name: /Find Your Dream Car/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Car Rental' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Buy Car' })).toHaveAttribute('aria-pressed', 'false')
    expect(screen.getByLabelText('Select Year')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Brand')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Model')).toBeInTheDocument()
    expect(screen.getByLabelText('Select Mileage')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Search/i })).toBeInTheDocument()
  })

  it('switches to the Buy Car tab and updates the heading', async () => {
    const user = userEvent.setup()
    render(<CarSearch />)
    await user.click(screen.getByRole('button', { name: 'Buy Car' }))
    expect(screen.getByRole('heading', { name: /Buy Your Dream Car/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Buy Car' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('shows validation errors when required selects are empty', async () => {
    const user = userEvent.setup()
    render(<CarSearch />)
    await user.click(screen.getByRole('button', { name: /Search/i }))
    expect(screen.getByText('Please select a year')).toBeInTheDocument()
    expect(screen.getByText('Please select a brand')).toBeInTheDocument()
  })

  it('confirms the search without reloading the page', async () => {
    const user = userEvent.setup()
    render(<CarSearch />)
    await user.selectOptions(screen.getByLabelText('Select Year'), '2020')
    await user.selectOptions(screen.getByLabelText('Select Brand'), 'Audi')
    await user.selectOptions(screen.getByLabelText('Select Model'), 'E-Tron')
    await user.click(screen.getByRole('button', { name: /Search/i }))
    expect(
      screen.getByText(/Thanks! We'll show you Audi rental cars from 2020\./),
    ).toBeInTheDocument()
  })

  it('confirms a buy-tab search with the for-sale message', async () => {
    const user = userEvent.setup()
    render(<CarSearch />)
    await user.click(screen.getByRole('button', { name: 'Buy Car' }))
    await user.selectOptions(screen.getByLabelText('Select Year'), '2019')
    await user.selectOptions(screen.getByLabelText('Select Brand'), 'BMW')
    await user.click(screen.getByRole('button', { name: /Search/i }))
    expect(
      screen.getByText(/Thanks! We'll show you BMW for-sale cars from 2019\./),
    ).toBeInTheDocument()
  })

  it('clears the confirmation when switching tabs', async () => {
    const user = userEvent.setup()
    render(<CarSearch />)
    await user.selectOptions(screen.getByLabelText('Select Year'), '2019')
    await user.selectOptions(screen.getByLabelText('Select Brand'), 'BMW')
    await user.click(screen.getByRole('button', { name: /Search/i }))
    expect(
      screen.getByText(/Thanks! We'll show you BMW rental cars from 2019\./),
    ).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Buy Car' }))
    expect(screen.queryByText(/Thanks!/)).not.toBeInTheDocument()
  })
})
