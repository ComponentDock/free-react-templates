import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Arrivals } from './Arrivals'

describe('Arrivals', () => {
  it('renders the section title', () => {
    render(<Arrivals />)
    expect(screen.getByText('New Arrivals')).toBeInTheDocument()
  })

  it('renders filter tabs', () => {
    render(<Arrivals />)
    expect(screen.getByRole('tab', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Bouquet' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Flower box' })).toBeInTheDocument()
  })

  it('shows all products by default', () => {
    render(<Arrivals />)
    expect(screen.getAllByText('Fly Me To The Moon').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Rose Garden Delight')).toBeInTheDocument()
  })

  it('filters products when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Arrivals />)
    await user.click(screen.getByRole('tab', { name: 'Bouquet' }))
    expect(screen.getAllByText('Fly Me To The Moon').length).toBeGreaterThanOrEqual(1)
    expect(screen.queryByText('Rose Garden Delight')).not.toBeInTheDocument()
  })

  it('shows View all products link', () => {
    render(<Arrivals />)
    expect(screen.getByRole('link', { name: /view all products/i })).toBeInTheDocument()
  })

  it('shows all products when All tab is selected after filtering', async () => {
    const user = userEvent.setup()
    render(<Arrivals />)
    await user.click(screen.getByRole('tab', { name: 'Bouquet' }))
    await user.click(screen.getByRole('tab', { name: 'All' }))
    expect(screen.getAllByText('Fly Me To The Moon').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Rose Garden Delight')).toBeInTheDocument()
  })
})
