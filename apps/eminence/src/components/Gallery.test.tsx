import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders heading and filter tabs', () => {
    render(<Gallery />)
    expect(screen.getByText('Our Latest Featured Projects')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Vector' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Raster' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'UI/UX' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Printing' })).toBeInTheDocument()
  })

  it('shows all 6 projects by default', () => {
    render(<Gallery />)
    expect(screen.getByText('3D Helmet Design')).toBeInTheDocument()
    expect(screen.getByText('2D Vinyl Design')).toBeInTheDocument()
    expect(screen.getByText('Creative Poster Design')).toBeInTheDocument()
    expect(screen.getByText('Embossed Logo Design')).toBeInTheDocument()
    expect(screen.getByText('3D Disposable Bottle')).toBeInTheDocument()
    expect(screen.getByText('3D Logo Design')).toBeInTheDocument()
  })

  it('filters projects when a category is selected', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    await user.click(screen.getByRole('button', { name: 'Raster' }))
    expect(screen.getByText('Creative Poster Design')).toBeInTheDocument()
    expect(screen.getByText('3D Disposable Bottle')).toBeInTheDocument()
    expect(screen.queryByText('3D Helmet Design')).not.toBeInTheDocument()
  })

  it('shows all projects when All filter is clicked', async () => {
    const user = userEvent.setup()
    render(<Gallery />)

    await user.click(screen.getByRole('button', { name: 'Vector' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('3D Helmet Design')).toBeInTheDocument()
    expect(screen.getByText('2D Vinyl Design')).toBeInTheDocument()
  })

  it('renders Load More button', () => {
    render(<Gallery />)
    expect(screen.getByRole('button', { name: 'Load More Items' })).toBeInTheDocument()
  })
})
