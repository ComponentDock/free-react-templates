import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading and all projects initially', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { name: /Featured Work/i })).toBeInTheDocument()
    expect(screen.getByText('Stellar Branding')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Social Campaign')).toBeInTheDocument()
    expect(screen.getByText('Product Photography')).toBeInTheDocument()
  })

  it('renders filter buttons', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Branding' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Web' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Marketing' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Photography' })).toBeInTheDocument()
  })

  it('filters projects when a category is selected', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    expect(screen.getByText('Stellar Branding')).toBeInTheDocument()
    expect(screen.getByText('Corporate Identity')).toBeInTheDocument()
    expect(screen.queryByText('E-Commerce Platform')).not.toBeInTheDocument()
    expect(screen.queryByText('Social Campaign')).not.toBeInTheDocument()
  })

  it('shows all projects when All is selected after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    await user.click(screen.getByRole('button', { name: 'Branding' }))
    await user.click(screen.getByRole('button', { name: 'All' }))
    expect(screen.getByText('Stellar Branding')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
  })

  it('marks the active filter button with aria-pressed', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'true')
    await user.click(screen.getByRole('button', { name: 'Web' }))
    expect(screen.getByRole('button', { name: 'Web' })).toHaveAttribute('aria-pressed', 'true')
    expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false')
  })
})
