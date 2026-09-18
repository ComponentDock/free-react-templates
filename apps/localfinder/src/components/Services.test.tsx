import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Services } from './Services'

describe('Services', () => {
  it('renders heading', () => {
    render(<Services />)
    expect(screen.getByText('The Most Searched Services')).toBeInTheDocument()
  })

  it('renders tab buttons', () => {
    render(<Services />)
    expect(screen.getByRole('button', { name: 'Restaurant' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shopping' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Travel' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Beauty' })).toBeInTheDocument()
  })

  it('shows Restaurant listings by default', () => {
    render(<Services />)
    expect(screen.getByText('The Golden Fork')).toBeInTheDocument()
    expect(screen.getByText('Spice Garden')).toBeInTheDocument()
  })

  it('switches tab on click', async () => {
    const user = userEvent.setup()
    render(<Services />)
    await user.click(screen.getByRole('button', { name: 'Shopping' }))
    expect(screen.getByText('Urban Outfitters')).toBeInTheDocument()
    expect(screen.getByText('Trendy Mall')).toBeInTheDocument()
  })

  it('switches to Travel tab', async () => {
    const user = userEvent.setup()
    render(<Services />)
    await user.click(screen.getByRole('button', { name: 'Travel' }))
    expect(screen.getByText('Wanderlust Tours')).toBeInTheDocument()
  })

  it('switches to Beauty tab', async () => {
    const user = userEvent.setup()
    render(<Services />)
    await user.click(screen.getByRole('button', { name: 'Beauty' }))
    expect(screen.getByText('Glow Studio')).toBeInTheDocument()
  })

  it('shows ratings for listings', () => {
    render(<Services />)
    expect(screen.getByText('4.8')).toBeInTheDocument()
  })
})
