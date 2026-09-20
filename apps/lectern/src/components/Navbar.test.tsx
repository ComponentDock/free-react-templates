import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  const defaultProps = {
    dark: false,
    onToggleDark: vi.fn(),
  }

  it('renders all navigation links', () => {
    render(<Navbar {...defaultProps} />)
    expect(screen.getByRole('link', { name: 'Lectern' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Courses' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders search and cart buttons', () => {
    render(<Navbar {...defaultProps} />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Shopping cart' })).toBeInTheDocument()
  })

  it('calls onToggleDark when dark mode button clicked', async () => {
    const onToggleDark = vi.fn()
    const user = userEvent.setup()
    render(<Navbar dark={false} onToggleDark={onToggleDark} />)

    await user.click(screen.getByRole('button', { name: /switch to dark mode/i }))
    expect(onToggleDark).toHaveBeenCalledTimes(1)
  })

  it('shows sun icon when dark mode is active', () => {
    render(<Navbar dark={true} onToggleDark={vi.fn()} />)
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument()
  })
})
