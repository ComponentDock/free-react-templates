import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText(/featured/i)).toBeInTheDocument()
    expect(screen.getByText(/portfolio/i)).toBeInTheDocument()
  })

  it('renders filter tabs', () => {
    render(<Portfolio />)
    const cats = ['All', 'Packaging', 'Mockup', 'Typography', 'Photography']
    cats.forEach((c) => {
      expect(screen.getByRole('button', { name: c })).toBeInTheDocument()
    })
  })

  it('shows all items by default', () => {
    render(<Portfolio />)
    expect(screen.getAllByText('Square Box Mockup').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Isometric 3D Extrusion').length).toBeGreaterThanOrEqual(1)
  })

  it('filters by category', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Packaging' }))
    expect(screen.getAllByText('Creative Package Design').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Packaging Brand').length).toBeGreaterThanOrEqual(1)
    // Mockup items should not be visible
    expect(screen.queryByText('Square Box Mockup')).not.toBeInTheDocument()
  })

  it('shows all when clicking All', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Mockup' }))
    expect(screen.getAllByText('Square Box Mockup').length).toBeGreaterThanOrEqual(1)
    expect(screen.queryByText('Creative Package Design')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getAllByText('Creative Package Design').length).toBeGreaterThanOrEqual(1)
  })
})
