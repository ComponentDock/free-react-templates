import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DiningBar } from './DiningBar'

describe('DiningBar', () => {
  it('renders the heading', () => {
    render(<DiningBar />)
    expect(screen.getByText('Dining & Bar')).toBeInTheDocument()
  })

  it('renders tab buttons', () => {
    render(<DiningBar />)
    expect(screen.getByText('Mains')).toBeInTheDocument()
    expect(screen.getByText('Desserts')).toBeInTheDocument()
    expect(screen.getByText('Drinks')).toBeInTheDocument()
  })

  it('shows mains menu by default', () => {
    render(<DiningBar />)
    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument()
  })

  it('switches to desserts on tab click', async () => {
    const user = userEvent.setup()
    render(<DiningBar />)
    await user.click(screen.getByText('Desserts'))
    expect(screen.getByText('Crème Brûlée')).toBeInTheDocument()
  })

  it('switches to drinks on tab click', async () => {
    const user = userEvent.setup()
    render(<DiningBar />)
    await user.click(screen.getByText('Drinks'))
    expect(screen.getByText('Signature Cocktail')).toBeInTheDocument()
  })
})
