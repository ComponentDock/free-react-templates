import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  const mockOnViewChange = vi.fn<(view: 'month' | 'week' | 'day') => void>()
  const mockOnSearch = vi.fn<(query: string) => void>()

  it('renders the brand title', () => {
    render(<Navbar currentView="month" onViewChange={mockOnViewChange} onSearch={mockOnSearch} />)
    expect(screen.getByRole('heading', { level: 1, name: /dayloom/i })).toBeInTheDocument()
  })

  it('renders the view switcher buttons', () => {
    render(<Navbar currentView="month" onViewChange={mockOnViewChange} onSearch={mockOnSearch} />)
    expect(screen.getByRole('button', { name: /^month$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^week$/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^day$/i })).toBeInTheDocument()
  })

  it('calls onViewChange when a view button is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar currentView="month" onViewChange={mockOnViewChange} onSearch={mockOnSearch} />)
    await user.click(screen.getByRole('button', { name: /^week$/i }))
    expect(mockOnViewChange).toHaveBeenCalledWith('week')
  })

  it('calls onSearch when typing in the search input', async () => {
    const user = userEvent.setup()
    render(<Navbar currentView="month" onViewChange={mockOnViewChange} onSearch={mockOnSearch} />)
    const searchInput = screen.getByPlaceholderText(/search events/i)
    await user.type(searchInput, 'sprint')
    expect(mockOnSearch).toHaveBeenCalledWith('sprint')
  })

  it('renders a mobile menu button', () => {
    render(<Navbar currentView="month" onViewChange={mockOnViewChange} onSearch={mockOnSearch} />)
    expect(screen.getByRole('button', { name: /mobile menu/i })).toBeInTheDocument()
  })

  it('highlights the active view button', () => {
    render(<Navbar currentView="day" onViewChange={mockOnViewChange} onSearch={mockOnSearch} />)
    const dayBtn = screen.getByRole('button', { name: /^day$/i })
    expect(dayBtn.className).toContain('bg-white')
    expect(dayBtn.className).toContain('text-indigo-600')
  })
})
