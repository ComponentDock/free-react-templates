import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first property name', () => {
    render(<Hero />)
    expect(screen.getByText('Riverside Haven')).toBeInTheDocument()
  })

  it('renders the first property price', () => {
    render(<Hero />)
    expect(screen.getByText('$ 2,450/month')).toBeInTheDocument()
  })

  it('renders the first property location', () => {
    render(<Hero />)
    expect(screen.getByText('123 River Road, Portland, OR')).toBeInTheDocument()
  })

  it('navigates to next slide on next button click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByText('Urban Loft')).toBeInTheDocument()
  })

  it('navigates to previous slide on prev button click from first slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByText('Garden Retreat')).toBeInTheDocument()
  })

  it('navigates to previous slide from second slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    // Go to slide 2
    await user.click(screen.getByRole('button', { name: /go to slide 2/i }))
    expect(screen.getByText('Urban Loft')).toBeInTheDocument()
    // Go back to slide 1
    await user.click(screen.getByRole('button', { name: /previous slide/i }))
    expect(screen.getByText('Riverside Haven')).toBeInTheDocument()
  })

  it('navigates to specific slide via dot indicator', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /go to slide 3/i }))
    expect(screen.getByText('Garden Retreat')).toBeInTheDocument()
  })

  it('wraps to first slide when clicking next on last slide', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /go to slide 3/i }))
    expect(screen.getByText('Garden Retreat')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByText('Riverside Haven')).toBeInTheDocument()
  })

  it('renders the View Details button', () => {
    render(<Hero />)
    expect(screen.getByText('View Details')).toBeInTheDocument()
  })

  it('renders all three dot indicators', () => {
    render(<Hero />)
    const dots = screen.getAllByRole('button', { name: /go to slide/i })
    expect(dots).toHaveLength(3)
  })
})
