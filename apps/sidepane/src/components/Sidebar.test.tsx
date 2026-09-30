import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders the logo with initial letter', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByText('C')).toBeInTheDocument()
  })

  it('renders the brand name', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByText('SidePane')).toBeInTheDocument()
  })

  it('renders the search input', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /videos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /books/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /store/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /analytics/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument()
  })

  it('calls onNavClick when a nav link is clicked', async () => {
    const user = userEvent.setup()
    const onNavClick = vi.fn()
    render(<Sidebar activeNav="Home" onNavClick={onNavClick} />)
    await user.click(screen.getByRole('button', { name: /videos/i }))
    expect(onNavClick).toHaveBeenCalledWith('Videos')
  })

  it('highlights the active nav link', () => {
    render(<Sidebar activeNav="Videos" onNavClick={vi.fn()} />)
    const videosBtn = screen.getByRole('button', { name: /videos/i })
    expect(videosBtn).toHaveAttribute('data-active', 'true')
  })

  it('does not highlight inactive nav links', () => {
    render(<Sidebar activeNav="Videos" onNavClick={vi.fn()} />)
    const homeBtn = screen.getByRole('button', { name: /home/i })
    expect(homeBtn).not.toHaveAttribute('data-active')
  })

  it('has an accessible aria-label on the sidebar', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByRole('navigation', { name: /sidebar navigation/i })).toBeInTheDocument()
  })
})
