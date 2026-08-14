import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  const defaultProps = {
    activeFilter: 'All' as const,
    onFilterChange: vi.fn(),
  }

  it('renders the centered headline with a blue accent word and a sub-line', () => {
    render(<Hero {...defaultProps} />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Simple and clean portfolio to showcase your\s+work/)
    expect(screen.getByText('work')).toHaveClass('text-primary-500')
    expect(screen.getByText(/Vivamus fermentum/)).toBeInTheDocument()
  })

  it('renders no call-to-action button — only the filter pills', () => {
    render(<Hero {...defaultProps} />)

    expect(screen.getAllByRole('button')).toHaveLength(7)
  })

  it('marks the active pill and styles it with the brand blue', () => {
    render(<Hero {...defaultProps} />)

    const all = screen.getByRole('button', { name: 'All' })
    expect(all).toHaveAttribute('aria-pressed', 'true')
    expect(all).toHaveClass('bg-primary-500')

    const art = screen.getByRole('button', { name: 'Art' })
    expect(art).toHaveAttribute('aria-pressed', 'false')
    expect(art).toHaveClass('border-line')
  })

  it('reports a clicked category pill to the parent', async () => {
    const user = userEvent.setup()
    const onFilterChange = vi.fn()
    render(<Hero activeFilter="All" onFilterChange={onFilterChange} />)

    await user.click(screen.getByRole('button', { name: 'Packaging' }))

    expect(onFilterChange).toHaveBeenCalledWith('Packaging')
  })
})
