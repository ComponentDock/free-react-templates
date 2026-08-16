import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the heading and the first page of service cards', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Services We Offer/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Architecture' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Construction' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Renovation' })).toBeInTheDocument()
  })

  it('advances and steps back through the cards with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<Services />)
    await user.click(screen.getByRole('button', { name: 'Next services' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Energy' })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 3, name: 'Architecture' }),
    ).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Previous services' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Architecture' })).toBeInTheDocument()
  })

  it('clamps the carousel at both ends', async () => {
    const user = userEvent.setup()
    render(<Services />)
    const next = screen.getByRole('button', { name: 'Next services' })
    const prev = screen.getByRole('button', { name: 'Previous services' })
    await user.click(prev)
    expect(screen.getByRole('heading', { level: 3, name: 'Architecture' })).toBeInTheDocument()
    await user.click(next)
    await user.click(next)
    expect(screen.getByRole('heading', { level: 3, name: 'Energy' })).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 3, name: 'Architecture' }),
    ).not.toBeInTheDocument()
  })

  it('renders a View Details box on each card', () => {
    render(<Services />)
    expect(screen.getAllByText('View Details')).toHaveLength(3)
  })
})
