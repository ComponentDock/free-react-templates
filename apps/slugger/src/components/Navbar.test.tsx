import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand, nav links, and Buy Ticket pill', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /slugger/i })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Games', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByRole('link', { name: 'Buy Ticket' })).toBeInTheDocument()
  })

  it('is transparent at the top and turns solid white after scrolling', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-white')
    expect(screen.getByRole('banner')).toHaveClass('bg-transparent')

    Object.defineProperty(window, 'scrollY', { value: 120, configurable: true, writable: true })
    fireEvent.scroll(window)

    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-dark')
    expect(screen.getByRole('banner')).toHaveClass('bg-white')

    Object.defineProperty(window, 'scrollY', { value: 0, configurable: true, writable: true })
    fireEvent.scroll(window)
    expect(screen.getByRole('link', { name: 'Home' })).toHaveClass('text-white')
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getAllByRole('link', { name: 'Buy Ticket' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('button', { name: 'Close menu' })).not.toBeInTheDocument()
  })
})
