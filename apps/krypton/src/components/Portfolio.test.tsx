import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and filter buttons', () => {
    render(<Portfolio />)

    expect(screen.getByRole('heading', { name: 'Our Portfolio' })).toBeInTheDocument()

    const filters = ['All', 'Design', 'Development', 'Marketing']
    for (const f of filters) {
      expect(screen.getByRole('button', { name: f })).toBeInTheDocument()
    }
  })

  it('shows all items when All is selected', () => {
    render(<Portfolio />)

    const items = screen.getAllByRole('img')
    expect(items.length).toBe(6)
  })

  it('filters items when a category is selected', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'Design' }))

    const items = screen.getAllByRole('img')
    expect(items.length).toBe(2)
  })

  it('returns to all items when All is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: 'Design' }))
    expect(screen.getAllByRole('img').length).toBe(2)

    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img').length).toBe(6)
  })
})
