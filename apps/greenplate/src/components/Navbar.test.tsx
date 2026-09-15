import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Greenplate')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shop' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders cart icon with count [0]', () => {
    render(<Navbar />)
    expect(screen.getByLabelText('Shopping cart')).toBeInTheDocument()
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('toggles shop dropdown on click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const shopBtn = screen.getByRole('button', { name: 'Shop' })

    await user.click(shopBtn)
    expect(screen.getByRole('link', { name: 'Vegetables' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Fruits' })).toBeInTheDocument()

    await user.click(shopBtn)
    expect(screen.queryByRole('link', { name: 'Vegetables' })).not.toBeInTheDocument()
  })
})
