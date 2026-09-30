import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders the logo with initial letter', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByText('D')).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByRole('button', { name: /home/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /videos/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /books/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /store/i })).toBeInTheDocument()
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

  it('renders the featured users section heading', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    expect(screen.getByText('Featured Users')).toBeInTheDocument()
  })

  it('renders all featured users', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    const users = ['Matt', 'Spike', 'Jassy', 'William', 'Johan', 'Charise', 'James', 'Chris']
    for (const name of users) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })

  it('renders user avatars with alt text', () => {
    render(<Sidebar activeNav="Home" onNavClick={vi.fn()} />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(8)
  })
})
