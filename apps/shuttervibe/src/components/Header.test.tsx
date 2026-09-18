import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  const defaultProps = {
    activePage: 'home' as const,
    onNavigate: vi.fn(),
    menuOpen: false,
    onToggleMenu: vi.fn(),
  }

  it('renders the logo and menu toggle', () => {
    render(<Header {...defaultProps} />)
    expect(screen.getByText('Shuttervibe')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Open menu' })).toBeInTheDocument()
  })

  it('shows Close menu label when menu is open', () => {
    render(<Header {...defaultProps} menuOpen />)
    expect(screen.getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('calls onToggleMenu when menu button is clicked', async () => {
    const user = userEvent.setup()
    const onToggleMenu = vi.fn()
    render(<Header {...defaultProps} onToggleMenu={onToggleMenu} />)

    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(onToggleMenu).toHaveBeenCalledOnce()
  })

  it('calls onNavigate with home when logo is clicked', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    render(<Header {...defaultProps} onNavigate={onNavigate} />)

    await user.click(screen.getByText('Shuttervibe'))
    expect(onNavigate).toHaveBeenCalledWith('home')
  })

  it('highlights the Photos nav link when activePage is photos', () => {
    render(<Header {...defaultProps} activePage="photos" />)
    const photosLink = screen.getByText('Photos')
    expect(photosLink).toHaveClass('text-brand')
  })

  it('calls onNavigate when a nav link is clicked', async () => {
    const user = userEvent.setup()
    const onNavigate = vi.fn()
    render(<Header {...defaultProps} onNavigate={onNavigate} />)

    await user.click(screen.getByText('Home'))
    expect(onNavigate).toHaveBeenCalledWith('home')
  })
})
