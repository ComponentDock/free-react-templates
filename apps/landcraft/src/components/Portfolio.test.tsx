import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Portfolio from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Our Best Work')).toBeInTheDocument()
  })

  it('renders all filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'Show All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Residential' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Commercial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Maintenance' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Design' })).toBeInTheDocument()
  })

  it('shows all items initially', () => {
    render(<Portfolio />)
    expect(screen.getByText('Garden Terrace')).toBeInTheDocument()
    expect(screen.getByText('Office Park')).toBeInTheDocument()
    expect(screen.getByText('Lawn Renovation')).toBeInTheDocument()
    expect(screen.getByText('Modern Patio')).toBeInTheDocument()
    expect(screen.getByText('Backyard Oasis')).toBeInTheDocument()
    expect(screen.getByText('Corporate Campus')).toBeInTheDocument()
  })

  it('filters items when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Residential' }))
    expect(screen.getByText('Garden Terrace')).toBeInTheDocument()
    expect(screen.getByText('Backyard Oasis')).toBeInTheDocument()
    expect(screen.queryByText('Office Park')).not.toBeInTheDocument()
  })

  it('shows all items when Show All is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Residential' }))
    await user.click(screen.getByRole('button', { name: 'Show All' }))
    expect(screen.getByText('Garden Terrace')).toBeInTheDocument()
    expect(screen.getByText('Office Park')).toBeInTheDocument()
  })
})
