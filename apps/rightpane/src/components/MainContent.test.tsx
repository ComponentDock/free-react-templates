import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MainContent } from './MainContent'

describe('MainContent', () => {
  it('renders heading and body text', () => {
    render(<MainContent sidebarOpen={true} onToggle={vi.fn()} />)
    expect(screen.getByText('Sidebar #04')).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument()
  })

  it('renders toggle button', () => {
    render(<MainContent sidebarOpen={true} onToggle={vi.fn()} />)
    expect(screen.getByTestId('toggle-button')).toBeInTheDocument()
  })

  it('calls onToggle when toggle button is clicked', async () => {
    const onToggle = vi.fn()
    const user = userEvent.setup()
    render(<MainContent sidebarOpen={true} onToggle={onToggle} />)
    await user.click(screen.getByTestId('toggle-button'))
    expect(onToggle).toHaveBeenCalledTimes(1)
  })

  it('shows close icon when sidebar is open', () => {
    render(<MainContent sidebarOpen={true} onToggle={vi.fn()} />)
    const btn = screen.getByTestId('toggle-button')
    expect(btn).toHaveAttribute('aria-label', 'Close sidebar')
  })

  it('shows open icon when sidebar is closed', () => {
    render(<MainContent sidebarOpen={false} onToggle={vi.fn()} />)
    const btn = screen.getByTestId('toggle-button')
    expect(btn).toHaveAttribute('aria-label', 'Open sidebar')
  })

  it('applies right margin when sidebar is open', () => {
    render(<MainContent sidebarOpen={true} onToggle={vi.fn()} />)
    expect(screen.getByRole('main')).toHaveClass('mr-[300px]')
  })

  it('removes right margin when sidebar is closed', () => {
    render(<MainContent sidebarOpen={false} onToggle={vi.fn()} />)
    expect(screen.getByRole('main')).toHaveClass('mr-0')
  })

  it('renders multiple paragraphs', () => {
    render(<MainContent sidebarOpen={true} onToggle={vi.fn()} />)
    const paragraphs = screen.getAllByText(/Lorem|Duis|Sed ut/)
    expect(paragraphs.length).toBeGreaterThanOrEqual(3)
  })
})
