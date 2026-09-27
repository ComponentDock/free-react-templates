import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section heading', () => {
    render(<Portfolio />)
    expect(screen.getByText(/Quality Work/)).toBeInTheDocument()
  })

  it('renders all filter tabs', () => {
    render(<Portfolio />)
    expect(screen.getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /popular/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /latest/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /following/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /upcoming/i })).toBeInTheDocument()
  })

  it('shows all items when All is selected', () => {
    render(<Portfolio />)
    expect(screen.getByText('Season Face')).toBeInTheDocument()
    expect(screen.getByText('Urban Vibe')).toBeInTheDocument()
    expect(screen.getByText('Digital Wave')).toBeInTheDocument()
    expect(screen.getByText('Night Glow')).toBeInTheDocument()
    expect(screen.getByText('Coastal Line')).toBeInTheDocument()
    expect(screen.getByText('Peak Focus')).toBeInTheDocument()
  })

  it('filters items when a category is clicked', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: /popular/i }))

    expect(screen.getByText('Urban Vibe')).toBeInTheDocument()
    expect(screen.getByText('Peak Focus')).toBeInTheDocument()
    expect(screen.queryByText('Season Face')).not.toBeInTheDocument()
    expect(screen.queryByText('Night Glow')).not.toBeInTheDocument()
  })

  it('returns to all items when All is clicked after filtering', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    await user.click(screen.getByRole('button', { name: /latest/i }))
    await user.click(screen.getByRole('button', { name: /all/i }))

    expect(screen.getByText('Season Face')).toBeInTheDocument()
    expect(screen.getByText('Urban Vibe')).toBeInTheDocument()
  })
})
