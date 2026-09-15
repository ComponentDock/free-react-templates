import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders section title and filter buttons', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /architecture/i })).toBeInTheDocument()
  })

  it('filters items by category', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    expect(screen.getByText('Residential Project')).toBeInTheDocument()
    expect(screen.getByText('Commercial Build')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /design/i }))
    expect(screen.getByText('Interior Design')).toBeInTheDocument()
    expect(screen.queryByText('Commercial Build')).not.toBeInTheDocument()
  })

  it('shows all items when All is selected', async () => {
    const user = userEvent.setup()
    render(<Gallery />)
    await user.click(screen.getByRole('button', { name: /painting/i }))
    expect(screen.queryByText('Commercial Build')).not.toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /all/i }))
    expect(screen.getByText('Commercial Build')).toBeInTheDocument()
  })

  it('renders gallery images', () => {
    render(<Gallery />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(6)
  })
})
