import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders the brand name', () => {
    render(<Navbar />)
    expect(screen.getByText('Tribune.')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Speakers' })).toHaveAttribute('href', '#speakers')
    expect(screen.getByRole('link', { name: 'Schedule' })).toHaveAttribute('href', '#schedule')
    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#blog')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('renders the Buy ticket button', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Buy ticket' })).toHaveAttribute('href', '#register')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleBtn = screen.getByRole('button', { name: 'Toggle navigation' })
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('accepts a custom brand name', () => {
    render(<Navbar brand="CustomBrand" />)
    expect(screen.getByText('CustomBrand.')).toBeInTheDocument()
  })
})
