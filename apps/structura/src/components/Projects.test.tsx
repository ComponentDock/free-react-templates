import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders the section heading', () => {
    render(<Projects />)
    expect(screen.getByRole('heading', { name: /Latest Projects/i })).toBeInTheDocument()
  })

  it('displays filter tabs', () => {
    render(<Projects />)
    expect(screen.getByRole('button', { name: /View All/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Residential/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Corporate/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Restaurant/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Industrial/i })).toBeInTheDocument()
  })

  it('shows 6 project cards', () => {
    render(<Projects />)
    const cards = screen.getAllByText('Architecture Building')
    expect(cards).toHaveLength(6)
  })

  it('filters projects when a tab is clicked', async () => {
    const user = userEvent.setup()
    render(<Projects />)
    await user.click(screen.getByRole('button', { name: /Residential/i }))
    const cards = screen.getAllByText('Architecture Building')
    expect(cards.length).toBeLessThan(6)
  })
})
