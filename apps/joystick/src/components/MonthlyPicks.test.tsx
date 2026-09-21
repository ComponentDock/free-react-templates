import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { MonthlyPicks } from './MonthlyPicks'

describe('MonthlyPicks', () => {
  it('renders the section heading', () => {
    render(<MonthlyPicks />)
    expect(screen.getByText("This Month's Pick")).toBeDefined()
  })

  it('renders 3 tabs', () => {
    render(<MonthlyPicks />)
    expect(screen.getByRole('tab', { name: 'Popular' })).toBeDefined()
    expect(screen.getByRole('tab', { name: 'Latest' })).toBeDefined()
    expect(screen.getByRole('tab', { name: "Editor's Pick" })).toBeDefined()
  })

  it('has Popular tab selected by default', () => {
    render(<MonthlyPicks />)
    const popularTab = screen.getByRole('tab', { name: 'Popular' })
    expect(popularTab).toHaveAttribute('aria-selected', 'true')
  })

  it('shows popular games by default', () => {
    render(<MonthlyPicks />)
    expect(screen.getByText('Grand Theft Auto V')).toBeDefined()
    expect(screen.getByText('Doom')).toBeDefined()
  })

  it('switches to Latest tab on click', async () => {
    const user = userEvent.setup()
    render(<MonthlyPicks />)
    await user.click(screen.getByRole('tab', { name: 'Latest' }))
    expect(screen.getByRole('tab', { name: 'Latest' })).toHaveAttribute('aria-selected', 'true')
    expect(screen.getByText('Elden Ring')).toBeDefined()
  })

  it('switches to Editor tab on click', async () => {
    const user = userEvent.setup()
    render(<MonthlyPicks />)
    await user.click(screen.getByRole('tab', { name: "Editor's Pick" }))
    expect(screen.getByRole('tab', { name: "Editor's Pick" })).toHaveAttribute(
      'aria-selected',
      'true',
    )
    expect(screen.getByText('Persona 5')).toBeDefined()
  })

  it('displays game ratings', () => {
    render(<MonthlyPicks />)
    expect(screen.getAllByText(/User: 9\.1\/10/).length).toBeGreaterThanOrEqual(1)
  })

  it('displays game genres', () => {
    render(<MonthlyPicks />)
    expect(screen.getAllByText('Action').length).toBeGreaterThanOrEqual(1)
  })
})
