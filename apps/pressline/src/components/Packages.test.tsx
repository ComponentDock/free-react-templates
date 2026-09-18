import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'

describe('Packages', () => {
  it('renders section heading', () => {
    render(<Packages />)
    expect(screen.getByText('Affordable Packages')).toBeInTheDocument()
  })

  it('renders all three packages', () => {
    render(<Packages />)
    expect(screen.getByText('Starter')).toBeInTheDocument()
    expect(screen.getByText('Professional')).toBeInTheDocument()
    expect(screen.getByText('Enterprise')).toBeInTheDocument()
  })

  it('displays prices', () => {
    render(<Packages />)
    expect(screen.getByText('$9')).toBeInTheDocument()
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$79')).toBeInTheDocument()
  })

  it('renders feature lists', () => {
    render(<Packages />)
    expect(screen.getByText('5 Book Listings')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Listings')).toBeInTheDocument()
  })

  it('renders Get Started buttons', async () => {
    const user = userEvent.setup()
    render(<Packages />)
    const buttons = screen.getAllByText('Get Started')
    expect(buttons).toHaveLength(3)
    // Click one to verify it's interactive
    await user.click(buttons[0]!)
  })
})
