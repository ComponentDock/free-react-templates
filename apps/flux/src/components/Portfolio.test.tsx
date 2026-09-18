import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Our Portfolio')).toBeInTheDocument()
  })

  it('renders filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All Projects' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Visual' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Advertising' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Development' })).toBeInTheDocument()
  })

  it('shows all items by default', () => {
    render(<Portfolio />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })

  it('filters items when a category is selected', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Visual' }))
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(1)
    expect(screen.getByText('Branding Identity')).toBeInTheDocument()
  })

  it('shows all items when All Projects is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Visual' }))
    expect(screen.getAllByRole('img')).toHaveLength(1)
    await user.click(screen.getByRole('button', { name: 'All Projects' }))
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
