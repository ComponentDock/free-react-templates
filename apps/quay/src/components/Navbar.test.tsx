import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Navbar } from './Navbar'
import { allNavLinks } from '../data'

describe('Navbar', () => {
  it('renders the centered logo and all navigation links on both sides', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: /^Quay$/ })).toHaveAttribute('href', '#home')

    for (const link of allNavLinks) {
      expect(screen.getAllByRole('link', { name: link.label, hidden: true })).toHaveLength(2)
    }
  })

  it('starts with the mobile menu closed and an accessible toggle', () => {
    render(<Navbar />)

    const toggle = screen.getByRole('button', { name: 'Open menu' })
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens the mobile menu panel when the toggle is activated and closes it again', async () => {
    const user = userEvent.setup()
    render(<Navbar />)

    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(screen.getByRole('navigation', { name: 'Mobile' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Close mobile menu' })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Close mobile menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })
})
