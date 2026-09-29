import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('renders brand text', () => {
    render(<Navbar onToggleSearch={vi.fn()} searchOpen={false} />)
    expect(screen.getByText('Brand')).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar onToggleSearch={vi.fn()} searchOpen={false} />)
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders search icon button', () => {
    render(<Navbar onToggleSearch={vi.fn()} searchOpen={false} />)
    expect(screen.getByRole('button', { name: /toggle search/i })).toBeInTheDocument()
  })

  it('calls onToggleSearch when search icon clicked', async () => {
    const user = userEvent.setup()
    const onToggle = vi.fn()
    render(<Navbar onToggleSearch={onToggle} searchOpen={false} />)
    await user.click(screen.getByRole('button', { name: /toggle search/i }))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows aria-expanded=false when search is closed', () => {
    render(<Navbar onToggleSearch={vi.fn()} searchOpen={false} />)
    const btn = screen.getByRole('button', { name: /toggle search/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows aria-expanded=true when search is open', () => {
    render(<Navbar onToggleSearch={vi.fn()} searchOpen={true} />)
    const btn = screen.getByRole('button', { name: /toggle search/i })
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })
})
