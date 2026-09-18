import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the portfolio heading', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /portfolio/i })).toBeInTheDocument()
  })

  it('renders all filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Brand' })).toBeInTheDocument()
  })

  it('shows all items initially', () => {
    render(<Portfolio />)
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })

  it('filters items when a filter is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Web' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
  })

  it('shows all items when All is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Web' }))
    expect(screen.getAllByRole('img')).toHaveLength(2)
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img')).toHaveLength(6)
  })
})
