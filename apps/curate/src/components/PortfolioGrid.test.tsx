import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders section heading', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText('This is what we can do for you')).toBeInTheDocument()
  })

  it('renders all filter buttons', () => {
    render(<PortfolioGrid />)
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /vector/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /raster/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /ui\/ux/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /printing/i })).toBeInTheDocument()
  })

  it('renders 12 portfolio items initially', () => {
    render(<PortfolioGrid />)
    const items = screen.getAllByRole('img')
    expect(items).toHaveLength(12)
  })

  it('filters to Vector items when Vector button clicked', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<PortfolioGrid />)

    await user.click(screen.getByRole('button', { name: /vector/i }))

    const items = screen.getAllByRole('img')
    expect(items).toHaveLength(3)
  })

  it('filters to Raster items when Raster button clicked', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<PortfolioGrid />)

    await user.click(screen.getByRole('button', { name: /raster/i }))

    const items = screen.getAllByRole('img')
    expect(items).toHaveLength(3)
  })

  it('shows all items when All button clicked after filtering', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<PortfolioGrid />)

    await user.click(screen.getByRole('button', { name: /vector/i }))
    await user.click(screen.getByRole('button', { name: /all/i }))

    const items = screen.getAllByRole('img')
    expect(items).toHaveLength(12)
  })

  it('marks active filter as pressed', async () => {
    const userEvent = (await import('@testing-library/user-event')).default
    const user = userEvent.setup()
    render(<PortfolioGrid />)

    const allBtn = screen.getByRole('button', { name: /all/i })
    expect(allBtn).toHaveAttribute('aria-pressed', 'true')

    await user.click(screen.getByRole('button', { name: /vector/i }))
    expect(screen.getByRole('button', { name: /vector/i })).toHaveAttribute('aria-pressed', 'true')
  })
})
