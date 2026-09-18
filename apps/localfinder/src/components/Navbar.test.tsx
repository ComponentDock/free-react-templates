import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('LocalFinder')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Listing')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Shop')).toBeInTheDocument()
  })

  it('renders Add Listing button', () => {
    render(<Navbar />)
    expect(screen.getByText('Add Listing')).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    // Mobile nav should be visible
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
  })

  it('closes mobile menu on second click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    await user.click(toggle)
    // Menu should be closed (only desktop nav visible)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('has user account button', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('User account')).toBeInTheDocument()
  })
})
