import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Gallery } from './Gallery'

describe('Gallery', () => {
  it('renders the heading, filter tabs, and all six project tiles by default', () => {
    const { container } = render(<Gallery />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Our Recent Completed Projects' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('button', { name: 'All Categories' })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Branding' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Image Manipulation' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Creative Work' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web Design' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Print Material' })).toBeInTheDocument()

    expect(container.querySelectorAll('img')).toHaveLength(6)
    // Every tile carries a gradient hover overlay with a lightbox icon.
    expect(container.querySelectorAll('div.bg-brand-gradient')).toHaveLength(6)
  })

  it('filters the grid when a category tab is selected', async () => {
    const user = userEvent.setup()
    const { container } = render(<Gallery />)

    await user.click(screen.getByRole('button', { name: 'Branding' }))
    expect(screen.getByRole('button', { name: 'Branding' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All Categories' })).toHaveAttribute(
      'aria-pressed',
      'false',
    )
    expect(container.querySelectorAll('img')).toHaveLength(2)
    expect(screen.getByRole('img', { name: 'Corporate Identity Suite' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Product Packaging Mockup' })).toBeInTheDocument()
    expect(screen.queryByRole('img', { name: 'E-commerce Interface' })).not.toBeInTheDocument()
  })

  it('shows a single project for a one-item category', async () => {
    const user = userEvent.setup()
    const { container } = render(<Gallery />)

    await user.click(screen.getByRole('button', { name: 'Image Manipulation' }))
    expect(container.querySelectorAll('img')).toHaveLength(1)
    expect(screen.getByRole('img', { name: 'Retail Campaign Art' })).toBeInTheDocument()
  })

  it('returns to all projects when All Categories is selected again', async () => {
    const user = userEvent.setup()
    const { container } = render(<Gallery />)

    await user.click(screen.getByRole('button', { name: 'Web Design' }))
    expect(container.querySelectorAll('img')).toHaveLength(1)

    await user.click(screen.getByRole('button', { name: 'All Categories' }))
    expect(container.querySelectorAll('img')).toHaveLength(6)
  })
})
