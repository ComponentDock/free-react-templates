import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the heading and filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
    for (const cat of ['All', 'Web', 'Design', 'Brand']) {
      expect(screen.getByRole('button', { name: cat })).toBeInTheDocument()
    }
  })

  it('shows all items by default', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(9)
  })

  it('filters items when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Design' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(2)
  })

  it('shows all items when All is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Web' }))
    expect(screen.getAllByRole('img')).toHaveLength(5)
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByRole('img')).toHaveLength(9)
  })
})
