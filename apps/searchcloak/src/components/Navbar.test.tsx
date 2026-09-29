import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows brand name, nav links, and search icon', () => {
    const onToggleSearch = vi.fn()
    render(<Navbar onToggleSearch={onToggleSearch} />)

    expect(screen.getByText('Brand')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('button', { name: 'Open search' })).toBeInTheDocument()
  })

  it('calls onToggleSearch when search icon is clicked', async () => {
    const user = userEvent.setup()
    const onToggleSearch = vi.fn()
    render(<Navbar onToggleSearch={onToggleSearch} />)

    await user.click(screen.getByRole('button', { name: 'Open search' }))
    expect(onToggleSearch).toHaveBeenCalledTimes(1)
  })

  it('brand link points to root', () => {
    render(<Navbar onToggleSearch={vi.fn()} />)
    expect(screen.getByText('Brand')).toHaveAttribute('href', '/')
  })
})
